// app/authenticators/password.js
import Base from 'ember-simple-auth/authenticators/base';
import { service } from '@ember/service';
import { get } from '@ember/object';
import { resolve } from 'rsvp';

export default class CustomAuthenticator extends Base {
  @service store;

  get host() {
    return this.store.adapterFor('application').host;
  }

  get signInUrl() {
    return `${this.host}/users/login`;
  }

  get signOutUrl() {
    return `${this.host}/users/logout`;
  }

  restore(data) {
    return resolve(data);
  }

  async authenticate({ email, password }) {
    const body = JSON.stringify({ login: email, password });
    const response = await fetch(this.signInUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const json = await response.json();

    return {
      userId: json.objectId,
      userToken: json['user-token'],
    };
  }

  invalidate(data) {
    return fetch(this.signOutUrl, {
      headers: {
        'Content-Type': 'application/json',
        'user-token': get(this.session, 'data.authenticated.userToken'),
      },
    });
  }
}
