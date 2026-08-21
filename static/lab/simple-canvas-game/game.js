'use strict';

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        if (!(vector instanceof(Vector))) {
            throw new Error('Можно прибавлять к вектору только вектор типа Vector');
        }
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    times(n) {
        return new Vector(this.x * n, this.y * n);
    }
}

class Actor {
    constructor(pos = new Vector(), size = new Vector(1, 1), speed = new Vector()) {
        if (!(pos instanceof(Vector))) throw new Error('расположение должно быть объектом типа Vector');
        if (!(size instanceof(Vector))) throw new Error('размер должен быть объектом типа Vector');
        if (!(speed instanceof(Vector))) throw new Error('скорость должна быть объектом типа Vector');
        this.pos = pos;
        this.size = size;
        this.speed = speed;
    }

    act() {}

    get left() {
        return this.pos.x;
    }
    get top() {
        return this.pos.y;
    }
    get right() {
        return this.pos.x + this.size.x;
    }
    get bottom() {
        return this.pos.y + this.size.y;
    }

    get type() {
        return 'actor';
    }

    isIntersect(actor) {
        if (actor === this) return false;
        if (actor.right <= this.left) return false; //объект левее
        if (actor.left >= this.right) return false; //объект правее
        if (actor.bottom <= this.top) return false; //объект выше
        if (actor.top >= this.bottom) return false; //объект ниже
        if ((actor.size.x < 0) || (actor.size.y < 0)) return false;
        return true;
    }
}

class Level {
    constructor(grid = [], actors = []) {
        this.grid = [].concat(grid);
        this.actors = [].concat(actors);
        this.height = this.grid.length;
        this.width = grid.reduce((width, line) => line.length > width ? line.length : width, 0);
        this.status = null;
        this.finishDelay = 1;
    }

    get player() {
        return this.actors.find(actor => actor.type === 'player');
    }

    isFinished() {
        return ((this.status !== null) && (this.finishDelay < 0));
    }

    actorAt(obj) {
        for (let actor of this.actors) {
            if (actor.isIntersect(obj)) return actor;
        }
    }

    obstacleAt(pos, size) {
    	const   xStart = Math.floor(pos.x),
                yStart = Math.floor(pos.y),
	            xEnd = Math.ceil(pos.x + size.x),
                yEnd = Math.ceil(pos.y +size.y);

        if (xStart < 0) return 'wall'; //левая граница уровня
        if (xEnd > this.width) return 'wall'; //правая граница уровня
        if (yStart < 0) return 'wall'; //верхняя граница уровня
        if (yEnd > this.height) return 'lava'; //нижняя граница уровня
	    for (let y = yStart; y < yEnd; y++) {
		    for (let x = xStart; x < xEnd; x++) {
			    if (this.grid[y][x] !== undefined) return this.grid[y][x];
		    }
	    }
    }

    removeActor(actor) {
        this.actors.splice(this.actors.indexOf(actor), 1);
    }

    noMoreActors(type) {
        if (this.actors.length === 0) return true;
        for (let actor of this.actors) {
            if (actor.type === type) return false;
        }
        return true;
    }

    playerTouched(type, actor) {
        if ((type === 'lava') || (type === 'fireball')) this.status = 'lost';
        if ((type === 'coin') && actor) {
            this.removeActor(actor);
            if (this.noMoreActors('coin')) this.status = 'won';
        }
    }
}

class LevelParser {
    constructor(dict) {
        this.dict = dict;
    }

    actorFromSymbol(symbol) {
        return (symbol !== undefined) ? this.dict[symbol] : undefined;
    }

    obstacleFromSymbol(symbol) {
        switch (symbol) {
            case 'x' : return 'wall';
            case '!' : return 'lava';
            default : return undefined;
        }
    }

    createGrid(scheme) {
        return scheme.reduce((result, string) => {
            const obstacles = string.split('').map(symbol => this.obstacleFromSymbol(symbol));
            result.push(obstacles);
            return result;
        }, []);
    }

    createActors(scheme) {
        const actors = [];
        if (this.dict) {
            scheme.forEach((string, y) => {
                string.split('').forEach((symbol, x) => {
                    if (symbol in this.dict) {
                        try {
                            const actor = new this.dict[symbol](new Vector(x, y));
                            if (actor instanceof(Actor)) actors.push(actor);
                        } catch(err) {
                            return false;
                        }
                    }
                });
            });
        }
        return actors;
    }

    parse(plan) {
        let grid =  this.createGrid(plan),
            actors = this.createActors(plan);
        return new Level(grid, actors);
    }
}

class Fireball extends Actor {
    constructor(pos = new Vector(), speed = new Vector()) {
        super(pos, new Vector(1, 1), speed);
    }

    get type() {
        return 'fireball';
    }

    getNextPosition(time = 1) {
        return this.pos.plus(this.speed.times(time));
    }

    handleObstacle() {
        this.speed = this.speed.times(-1);
    }

    act(time, level) {
        const   next = this.getNextPosition(time),
                obstacle = level.obstacleAt(next, this.size);
        if (obstacle) {
            this.handleObstacle();
        } else {
            this.pos = next;
        }
    }
}

class HorizontalFireball extends Fireball {
    constructor(pos) {
        super(pos, new Vector(2, 0));
    }
}

class VerticalFireball extends Fireball {
    constructor(pos) {
        super(pos, new Vector(0, 2));
    }
}

class FireRain extends Fireball {
    constructor(pos) {
        super(pos, new Vector(0, 3));
        this.start = pos;
    }

    handleObstacle() {
        this.pos = this.start;
    }
}

function rand(max = 10, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Coin extends Actor {
    constructor(pos) {
        super(pos, new Vector(.6, .6));
        this.pos = this.pos.plus(new Vector(.2, .1));
        this.springSpeed = 8;
        this.springDist = .07;
        this.spring = rand(Math.PI, 0.2);
    }

    get type() {
        return 'coin';
    }

    updateSpring(time = 1) {
        this.spring += this.springSpeed * time;
    }

    getSpringVector() {
        return new Vector(0, Math.sin(this.spring) * this.springDist);
    }

    getNextPosition(time = 1) {
        this.spring += this.springSpeed * time;
        return this.pos.plus(this.getSpringVector());
    }

    act(time) {
        this.pos = this.getNextPosition(time);
    }
}

class Player extends Actor {
    constructor(pos) {
        super(pos, new Vector(0.8, 1.5));
        this.pos = this.pos.plus(new Vector(0, -.5));
    }

    get type() {
        return 'player';
    }
}
const   actors = {
            '@': Player,
            'o': Coin,
            '=': HorizontalFireball,
            '|': VerticalFireball,
            'v': FireRain,
        },
        parser = new LevelParser(actors);
loadLevels()
	.then(plans => runGame(JSON.parse(plans), parser, DOMDisplay))
	.then(() => alert('Вы выиграли приз!'))
	.catch(err => alert(err));
