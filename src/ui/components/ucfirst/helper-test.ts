import ucfirst from './helper';

const { module, test } = QUnit;

module('Helper: ucfirst', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(ucfirst(['ferskinetti']), 'Ferskinetti');
  });
});
