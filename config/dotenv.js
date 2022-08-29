/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function (env) {
  return {
    clientAllowedKeys: ['API_URL', 'APPLICATION_ID', 'REST_ID'],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), `.env-${env}`),
  };
};
