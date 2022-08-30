import { RestSerializer } from 'miragejs';

export default RestSerializer.extend({
  root: false,
  embed: true,

  primaryKey: 'objectId',

  /**
   * Backendless uses objectId as primary key.
   *This is the only way to tell this to mirage serializers
   */
  keyForAttribute(attr) {
    if (attr === 'id') {
      return this.primaryKey;
    }

    return attr;
  },
});
