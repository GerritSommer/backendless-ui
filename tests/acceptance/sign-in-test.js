import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'backendless-ui/tests/helpers';
import {
  currentSession,
  authenticateSession,
  invalidateSession,
} from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | sign in', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('/sign-in redirects to index if user is already logged in', async function (assert) {
    assert.expect(3);
    const account = this.server.create('account', 1);
    this.server.create('file', 3);

    await authenticateSession({
      userId: account.id,
      userToken: 'a1b2c3',
    });
    await visit('/sign-in');

    assert.strictEqual(
      currentURL(),
      '/authenticated',
      'A signed in user should be redirected to the authenticated routre'
    );

    let sessionData = currentSession().get('data.authenticated');

    assert.strictEqual(
      sessionData.userId,
      account.id,
      'the session should have the userId'
    );
    assert.strictEqual(
      sessionData.userToken,
      'a1b2c3',
      'the session should have the userToken'
    );
  });

  test('/authenticated redirects to /login if user is not logged in', async function (assert) {
    assert.expect(1);
    await invalidateSession();

    await visit('/authenticated');

    assert.strictEqual(currentURL(), '/sign-in');
  });

  test('visiting /sign-in', async function (assert) {
    assert.expect(1);
    await visit('/sign-in');

    assert.strictEqual(currentURL(), '/sign-in');
  });
});
