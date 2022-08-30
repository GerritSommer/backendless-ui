import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  accountType: 'BACKENDLESS',
  blUserLocale: 'en',

  // ownerId: string,
  socialAccount: 'BACKENDLESS',
  userStatus: 'ENABLED',

  email() {
    faker.internet.email(this.name);
  },
  name() {
    return faker.name.fullName();
  },
  created() {
    return faker.date.past(3);
  },
  lastLogin() {
    return faker.date.recent(10);
  },
  updated() {
    return faker.date.past(1);
  },
});
