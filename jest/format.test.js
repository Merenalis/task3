const format = require('./format');

test('test', () => {
    expect(format('var_text_hello')).toBe('varTextHello');
    expect(format('var____test___jest')).toBe('varTestJest');

    expect(format('var_text_hello')).toMatch(/[a-zа-я]/gi);
    expect(format('_check_JEST_good')).toBe('CheckJESTGood');
});