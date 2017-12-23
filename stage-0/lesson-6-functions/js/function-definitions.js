/**
 * In the file below you can see the various ways to define the function
 * More info: https://www.w3schools.com/js/js_function_definition.asp
 */


/**
 * 1. Function Declaration example
 * Declared function can be invoked by function name
 * Also declared function will be hoisted so can be used in the code even before the actual declaration
 * More info: https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5
 * @param {number} x
 * @returns {number}
 */
function fnDeclaration(x) {
    return Math.pow(x, 2);
}

/**
 * 2. Function Expression example
 *   A) ECMAScript 5 syntax
 * Function expression will be assigned to the variable and then can be invoked by variable name
 * However function expression can not be used before the actual declaration because it will contain undefined value
 * @param {number} x
 * @returns {number}
 */
var fnExpressionES5 = function(x) {
    return x + 10;
};

/**
 * 2. Function Expression example
 *   B) ECMAScript 6 syntax
 * Function expression will be assigned to the variable and then can be invoked by variable name
 * However function expression can not be used before the actual declaration because it will contain undefined value
 * @param {number} x
 * @returns {number}
 */
const fnExpression6 = x => x + 10;

/**
 * 3. Function Constructor
 * Behaves like function expression but looks not really readable. Avoid using it
 * @type {Function}
 */
const fnConstructor = new Function('x', 'y', 'return x + y;');