import ApplicationSerializer from './application';

export default class FileSerializer extends ApplicationSerializer {
  primaryKey = 'url';

  extractId(modelClass, resourceHash) {
    return resourceHash.url;
  }
}
