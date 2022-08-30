import { module, test } from 'qunit';
import { setupRenderingTest } from 'backendless-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sign-in', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the inputs and button', async function (assert) {
    assert.expect(3);

    await render(hbs`<SignIn />`);
    assert.dom('input[type="email"]').exists();
    assert.dom('input[type="password"]').exists();
    assert.dom('button[type="submit"]').hasText('Sign in');
  });
});
