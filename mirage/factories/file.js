import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name() {
    return faker.system.commonFileName('png');
  },
  publicUrl() {
    return `/${this.name}`;
  },
  size() {
    return faker.datatype.number({ min: 1000 });
  },
  createdOn() {
    return faker.date.recent(10);
  },
  updatedOn() {
    return faker.date.recent(5);
  },
});
