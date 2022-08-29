import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { get } from '@ember/object';

export default class AuthenticatedRoute extends Route {
  @service session;
  @service store;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'sign-in');
  }

  get currentUserId() {
    // eslint-disable-next-line ember/no-get
    return get(this.session, 'data.authenticated.userId');
  }

  model() {
    return this.store.findRecord('account', this.currentUserId);
  }
}
