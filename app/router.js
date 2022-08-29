import EmberRouter from '@ember/routing/router';
import config from 'backendless-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sign-in');
  this.route('authenticated', function () {
    this.route('files', function () {
      this.route('upload');
    });
  });
});
