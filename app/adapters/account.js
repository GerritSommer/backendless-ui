import ApplicationAdapter from './application';

export default class AccountAdapter extends ApplicationAdapter {
  pathForType() {
    return 'users';
  }
}
