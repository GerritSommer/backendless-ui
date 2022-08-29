import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SignInRoute extends Route {
  @service session;

  beforeModel() {
    this.session.prohibitAuthentication('authenticated.index');
  }
}
