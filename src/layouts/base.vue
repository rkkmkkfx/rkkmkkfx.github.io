<template>
  <div>
    <header class="h-16">
    </header>
    <main v-bind="$attrs">
      <Nuxt/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Base'
}
</script>
