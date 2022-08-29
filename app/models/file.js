import Model, { attr } from '@ember-data/model';

export default class FileModel extends Model {
  @attr('string') name;
  @attr('string') publicUrl;
  @attr('number') size;
  @attr('date') createdOn;
  @attr('date') updatedOn;
}
