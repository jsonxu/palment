/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

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

  // 定义日志路径
  exports.logger = {
      dir: path.resolve(__dirname, '../buildlogs'),
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
    client:{
        url: 'mongodb://127.0.0.1:27019/palment',
        options: {
            poolSize: 20,
        },
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
