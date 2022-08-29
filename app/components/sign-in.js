import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SignInComponent extends Component {
  @service session;

  @tracked email;
  @tracked password;

  @action
  async signIn(event) {
    event.preventDefault();
    const { email, password } = this;
    this.session.authenticate('authenticator:password', { email, password });
  }
}
