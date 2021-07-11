
const func = require('../scripts/formatting');
test('test', () => {
    expect(func('var_text_hello')).toBe('varTextHello');
    expect(func('var____test___jest')).toBe('varTestJest');

    expect(func('var_text_hello')).toMatch(/[a-zа-я]/gi);
    expect(func('_check_JEST_good')).toBe('CheckJESTGood');

});
