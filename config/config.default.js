/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563348822293_7628';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // redis配置
  config.redis = {
      client: {
          port: 6379, // Redis port
          host: '127.0.0.1', // Redis host
          password: '',
          db: 0,
      },
  };

  // mongoose配置
  config.mongoose = {
      clients: dbclients,
  };

  return {
    ...config,
    ...userConfig,
  };
};
