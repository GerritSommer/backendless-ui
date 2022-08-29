import { module, test } from 'qunit';
import { setupRenderingTest } from 'backendless-ui/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | files/uploader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Files::Uploader />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Files::Uploader>
        template block text
      </Files::Uploader>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
