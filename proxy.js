const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define the target URL you want to proxy requests to
const targetUrl = 'http://rocketbotroyale.winterpixel.io/';

// Create the proxy middleware


// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server is listening on port ${port}`);
});
