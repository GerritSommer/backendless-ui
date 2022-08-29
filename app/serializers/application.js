import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  primaryKey = 'objectId';

  extractId(modelClass, resourceHash) {
    return resourceHash.objectId;
  }
}
