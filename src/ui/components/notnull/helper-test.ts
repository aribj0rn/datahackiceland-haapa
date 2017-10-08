import notnull from './helper';

const { module, test } = QUnit;

module('Helper: notnull', function(hooks) {
  test('it computes', function(assert) {
    assert.equal(notnull([null]), true);
    assert.equal(notnull(['asdf']), false);
  });
});
