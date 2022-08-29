import { module, test } from 'qunit';
import { setupTest } from 'backendless-ui/tests/helpers';

module('Unit | Route | authenticated/files', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authenticated/files');
    assert.ok(route);
  });
});
