import { ApiBaseUrlSwitcher } from './ApiBaseUrlSwitcher';

const { createProxyMiddleware } = require('http-proxy-middleware');

export const apiProxy = createProxyMiddleware({
  target: ApiBaseUrlSwitcher(),
  changeOrigin: true,
});

// 'apiProxy' is now ready to be used as middleware in a server.
