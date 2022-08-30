import RESTAdapter from '@ember-data/adapter/rest';
import { service } from '@ember/service';
import { get } from '@ember/object';
import ENV from 'backendless-ui/config/environment';
const { API_URL, APPLICATION_ID, REST_ID } = ENV;

export default class ApplicationAdapter extends RESTAdapter {
  @service session;

  get host() {
    return `${API_URL}/${APPLICATION_ID}/${REST_ID}`;
  }

  get headers() {
    // eslint-disable-next-line ember/no-get
    const userToken = get(this.session, 'data.authenticated.userToken');
    const headers = {
      'Content-Type': 'application/json',
    };

    if (userToken) {
      headers['user-token'] = userToken;
    }

    return headers;
  }
}
