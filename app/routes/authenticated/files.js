import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AuthenticatedFilesRoute extends Route {
  @service store;
  model() {
    return this.store.query('file', {});
  }
}
