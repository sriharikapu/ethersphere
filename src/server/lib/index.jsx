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
        <title>Coincircle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0" />
        <script src="//cdn.auth0.com/js/lock/10.22.0/lock.min.js" />
        <script src="/vendor/keythereum.min.js" />
        {/^\/exchange/.test(path) && <script src="/vendor/tradingview/charting_library.min.js" />}
        {/^\/exchange/.test(path) && <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js" />}
        {/^\/exchange/.test(path) && <script src="/vendor/tradingview/datafeed.js" />}
        {/^\/exchange/.test(path) && <link rel="stylesheet" src="/vendor/tradingview/styles.css" />}
        {/^\/kyc/.test(path) && <script src="https://cdn.plaid.com/link/v2/stable/link-initialize.js" />}
        {/^\/projects\/blockchain-terminal/.test(path) && <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js" />}
        {/* DEV */}
        <link rel="stylesheet" href="https://i.icomoon.io/public/92c82ebaf1/coincircle/style.css" />
      </head>
      <body>
        <div id="app" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
          `}} />
        <script src="/bundle.js" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109709294-1"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-109709294-1');
        `}} />
      </body>
    </html>
  );
}

export default Index;
