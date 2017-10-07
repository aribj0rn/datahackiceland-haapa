import formatDate from './helper';

const { module, test } = QUnit;

module('Helper: format-date', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(formatDate([]), undefined);
  });
});
