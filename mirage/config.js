import ENV from 'backendless-ui/config/environment';
import {
  discoverEmberDataModels,
  applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
const { APPLICATION_ID, REST_ID } = ENV;

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    serializers: applyEmberDataSerializers(config.serializers),
    routes() {
      // this.urlPrefix = 'http://localhost:4200'; // make this `http://localhost:8000`, for example, if your API is on a different server
      // this.timing = 400;      // delay for each request, automatically set to 0 during testing
      this.namespace = `${APPLICATION_ID}/${REST_ID}`;

      this.get('/users/:id', ({ accounts }, request) => {
        return accounts.find(request.params.id);
      });
    },
  };

  return createServer(finalConfig);
}
