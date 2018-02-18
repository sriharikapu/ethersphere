/* eslint-disable */
import React from 'react';

function Index({ preloadedState, path }) {
  return (
    <html lang="en-US">
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" type="image/png" href="/img/icon_32x32.png?v=4" sizes="32x32" />
        <link rel="shortcut icon" type="image/png" href="/img/icon_16x16.png?v=4" sizes="16x16" />
        <title>Ξthersphere</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0" />
        <script src="/vendor/keythereum.min.js" />
        <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js' />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body>
        <div id="app" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
          `}} />
        <script src="/vendor/three.js/js/three.min.js"></script>
        <script src="/vendor/three.js/js/OBJLoader.js"></script>
        <script src="/vendor/three.js/js/MTLLoader.js"></script>
        <script src="/bundle.js" />
      </body>
    </html>
  );
}

export default Index;
