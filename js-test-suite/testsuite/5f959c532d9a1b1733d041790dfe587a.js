load("d939ff969bbec9f42f03670e3a7606a8.js");

function wrapper() {

function foo(o) {
    let variableName = o;
    return variableName;
}
let o1 = new Number;
o1.__proto__ = null;
foo(o1);

let o2 = function() {}
foo(o2);

}
wrapper();

// ====== End test cases ======
var types = findTypeForExpression(wrapper, "variableName;"); 
assert(types.instructionTypeSet.displayTypeName === "Object", "'Object' should be our TOP.");
