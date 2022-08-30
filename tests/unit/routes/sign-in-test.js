import { module, test } from 'qunit';
import { setupTest } from 'backendless-ui/tests/helpers';

module('Unit | Route | sign-in', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sign-in');
    assert.ok(route);
  });
});
