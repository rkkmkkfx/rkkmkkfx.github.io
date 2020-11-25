import React from 'react';
import Head from 'next/head';

import TinyLinks from '../components/TinyLinks';

const WorkPage = () => (
  <>
    <Head>
      <title>Work |  Sergey Baranov | Web Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h2>HTML Layout</h2>
    <TinyLinks links={[
      {
        url: 'https://www.anychart.com',
        header: 'AnyChart site',
        description: 'PHP, SCSS, JS, Webpack, Gulp, Bootstrap',
        defaultMedia: '/static/img/work/anychart.png',
      },
      {
        url: 'https://cirql8.netlify.app',
        header: 'Cirql8 site(2019, Netlify copy)',
        description: 'PHP, HTML, CSS',
        defaultMedia: '/static/img/work/cirql8.svg',
      },
      {
        url: 'https://freshtourism-demo.netlify.app',
        header: 'Fresh Tourism site(2018, Netlify copy)',
        description: 'ReactJS, HTML, CSS, JS',
        defaultMedia: '/static/img/work/freshtourism.png',
      },
      {
        url: 'http://sattelecom.ru',
        header: 'Sattelecom site(2017)',
        description: 'Template (PHP, CSS, JS) on custom CMS',
        defaultMedia: '/static/img/work/sattelecom.jpg',
      },
      {
        url: 'http://1k-irk.ru',
        header: '1K-Irk site(2017)',
        description: 'Template (PHP, CSS, JS) on custom CMS',
      },
      {
        url: 'http://ranex-avto.ru',
        header: 'Ranex Auto site(2016)',
        description: 'Template (PHP, CSS, JS) on custom CMS',
      },
      {
        url: 'https://plasticangarsk.ru',
        header: 'Plastic Angarsk site(2015)',
        description: 'Template (PHP, CSS, JS) on custom CMS',
      },
      {
        url: 'http://baiqal.ru',
        header: '"Wave of Baikal" site(2015)',
        description: 'Template (PHP, CSS, JS) on custom CMS',
      },
    ]}
    />
  </>
);

export default WorkPage;
