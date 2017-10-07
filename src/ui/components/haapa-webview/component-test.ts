import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: haapa-webview', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<haapa-webview />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
