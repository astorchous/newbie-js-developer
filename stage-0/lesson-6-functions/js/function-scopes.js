/**
 * Function scope is the most important theme in Javascript
 * See more: https://www.w3schools.com/js/js_scope.asp
 */

/**
 * By default all variables and functions are being defined on a global scope. In browser this scope is called `window`
 * Any global scope defined variable can be accessed directly from any child scope
 * @type {string}
 */
var globalScopeVar = 'Global Scope Variable';

/**
 * Each function has own scope which always inherits the parent scope
 * This means that function may have own variables and also can access inherited variables
 */
function globalScopeFunction() {
    //Any parent scope variable can be accessed in the child scope
    console.log(globalScopeVar);
    //Or can be changed
    globalScopeVar += ' adjusted by globalScopeFunction';

    //Function can have local variables
    var innerVar = 'Inner function variable';

    //or functions
    function innerScopeFunction() {
        //Any scope can redeclare inherited variable but it will affect the current scope only
        const globalScopeVar = 'Inner Scope value';
        return globalScopeVar + ' return statement';
    }
    const anotherInnerConst = innerScopeFunction();

    /**
     * All the arguments are ALWAYS local function variables so can be named in the way you like
     * In the example below the argument is called globalScope var which can be confusing. Remember:
     * the actual value of the local variable passed as argument into the function depend only on the value provided
     * I.E. anotherInnerScopeFunction(5) will initialize LOCAL variable globalScopeVar = 5
     * @param {number} globalScopeVar
     * @return {number}
     */
    function anotherInnerScopeFunction(globalScopeVar) {
        return globalScopeVar + 1;
    }
    console.log(`anotherInnerScopeFunction(10)=${anotherInnerScopeFunction(10)}`);

    //and can be used in return statement
    return globalScopeVar;
}
/**
 * Bad counter example
 */
let badCounter = 0;
function badCounterExample() {
    return ++badCounter;
}
console.log('Bad Counter:');
console.log(badCounterExample());//1
console.log(badCounterExample());//2
console.log(badCounterExample());//3
badCounter = -1;
console.log(badCounterExample());//0

/**
 * Better counter example
 */
function betterCounter() {
    let count = 0;
    return function () {
        return ++count;
    }
}

const counter = betterCounter();
console.log('Better Counter:');
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3

/**
 * Good counter example
 */
function goodCounter(value = 0) {
    return function(increase = 1) {
        value += increase;
        return value;
    }
}

const otherCounter = goodCounter(2);
console.log('Good Counter:');
console.log(otherCounter());//3
console.log(otherCounter());//4
console.log(otherCounter(2));//6