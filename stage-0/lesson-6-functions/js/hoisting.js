/**
 * Variable hoisting is the behavior in JS on code parse stage
 * The variable definition stage is being performed before the code execution
 * More info: https://developer.mozilla.org/ru/docs/%D0%A1%D0%BB%D0%BE%D0%B2%D0%B0%D1%80%D1%8C/%D0%9F%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5
 */

(function() {
    console.log('Javascript Hoisting');


    //Function declaration check
    try {
        console.log(`Trying to call function declaration: ${hoistedFunctionDeclaration()}`);
    } catch (error) {
        console.log(`Failed to call function declaration: ${error}`);
    }


    //Function expression check
    try {
        console.log(`Calling function expression: ${hoistedFunctionExpression()}`);
    } catch (error) {
        console.log(`Failed to call function expression: ${error}`);
    }


    //ES5 var check
    try {
        console.log(`Trying to access var: ${hoistedVar}`);
    } catch (error) {
        console.log(`Failed to access var: ${error}`);
    }


    //ES6 let check
    try {
        console.log(`Trying to access let: ${hoistedLet}`);
    } catch (error) {
        console.log(`Failed to access let: ${error}`);
    }


    //ES6 const check
    try {
        console.log(`Trying to access const: ${hoistedConst}`);
    } catch (error) {
        console.log(`Failed to access var: ${error}`);
    }


    /**
     * Function defined as function declaration can be called even before the actual declaration
     * @returns {string}
     */
    function hoistedFunctionDeclaration() {
        return 'Function Declaration';
    }

    /**
     * Function defined as function expression behaves like variable: it is defined but not initialized
     * @returns {string}
     */
    var hoistedFunctionExpression = function() {
        return 'Function Expression';
    };

    /**
     * ES5 var is defined but not initialized
     * @type {string}
     */
    var hoistedVar = 'ES5 var';

    /**
     * ES6 let is not initialized and can not be accessed before the declaration in order to prevent runtime errors
     * @type {string}
     */
    let hoistedLet = 'ES6 let';

    /**
     * ES6 const is not initialized and can not be accessed before the declaration in order to prevent runtime errors
     * @type {string}
     */
    const hoistedConst = 'ES6 const';
})();
