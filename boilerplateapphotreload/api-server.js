const RestProxy = require('sp-rest-proxy');
const settings = {
    configPath: './config/private.json',
    port: 8081
};

const restProxy = new RestProxy(settings);
restProxy.serve();
