import Model, { attr } from '@ember-data/model';

export default class AccountModel extends Model {
  @attr('string') accountType; // BACKENDLESS
  @attr('string') blUserLocale; // en
  @attr('number') created; // timestamp
  @attr('string') email;
  @attr('number') lastLogin;
  @attr('string') name;
  @attr('string') ownerId;
  @attr('string') socialAccount; // "BACKENDLESS"
  @attr('number') updated;
  @attr('string') userStatus; // "ENABLED"
}
