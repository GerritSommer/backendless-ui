import { module, skip } from 'qunit';
import { setupRenderingTest } from 'backendless-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | files/uploader', function (hooks) {
  setupRenderingTest(hooks);

  skip('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Files::Uploader />`);

    assert.dom(this.element).hasText('');

    assert.dom(this.element).hasText('template block text');
  });
});
