load("fcfbc86708bc3a4062c2091a062e13b6.js");
load("f84fa150dbe5b1b3e196e3bdf2e8ab6e.js");
load("bb5b1529929999e134af01520c18de68.js");
// |reftest| skip-if(!xulRuntime.shell)
function test() { 
// Builder tests

Pattern("program").match(Reflect.parse("42", {builder:{program:() => "program"}}));

assertGlobalStmt("throw 42", 1, { throwStatement: () => 1 });
assertGlobalStmt("for (;;);", 2, { forStatement: () => 2 });
assertGlobalStmt("for (x in y);", 3, { forInStatement: () => 3 });
assertGlobalStmt("{ }", 4, { blockStatement: () => 4 });
assertGlobalStmt("foo: { }", 5, { labeledStatement: () => 5 });
assertGlobalStmt("with (o) { }", 6, { withStatement: () => 6 });
assertGlobalStmt("while (x) { }", 7, { whileStatement: () => 7 });
assertGlobalStmt("do { } while(false);", 8, { doWhileStatement: () => 8 });
assertGlobalStmt("switch (x) { }", 9, { switchStatement: () => 9 });
assertGlobalStmt("try { } catch(e) { }", 10, { tryStatement: () => 10 });
assertGlobalStmt(";", 11, { emptyStatement: () => 11 });
assertGlobalStmt("debugger;", 12, { debuggerStatement: () => 12 });
assertGlobalStmt("42;", 13, { expressionStatement: () => 13 });
assertGlobalStmt("for (;;) break", forStmt(null, null, null, 14), { breakStatement: () => 14 });
assertGlobalStmt("for (;;) continue", forStmt(null, null, null, 15), { continueStatement: () => 15 });

assertBlockDecl("var x", "var", { variableDeclaration: kind => kind });
assertBlockDecl("let x", "let", { variableDeclaration: kind => kind });
assertBlockDecl("const x = undefined", "const", { variableDeclaration: kind => kind });
assertBlockDecl("function f() { }", "function", { functionDeclaration: () => "function" });

assertGlobalExpr("(x,y,z)", 1, { sequenceExpression: () => 1 });
assertGlobalExpr("(x ? y : z)", 2, { conditionalExpression: () => 2 });
assertGlobalExpr("x + y", 3, { binaryExpression: () => 3 });
assertGlobalExpr("delete x", 4, { unaryExpression: () => 4 });
assertGlobalExpr("x = y", 5, { assignmentExpression: () => 5 });
assertGlobalExpr("x || y", 6, { logicalExpression: () => 6 });
assertGlobalExpr("x++", 7, { updateExpression: () => 7 });
assertGlobalExpr("new x", 8, { newExpression: () => 8 });
assertGlobalExpr("x()", 9, { callExpression: () => 9 });
assertGlobalExpr("x.y", 10, { memberExpression: () => 10 });
assertGlobalExpr("(function() { })", 11, { functionExpression: () => 11 });
assertGlobalExpr("[1,2,3]", 12, { arrayExpression: () => 12 });
assertGlobalExpr("({ x: y })", 13, { objectExpression: () => 13 });
assertGlobalExpr("this", 14, { thisExpression: () => 14 });
assertGlobalExpr("(function() { yield 42 })", genFunExpr("legacy", null, [], blockStmt([exprStmt(19)])), { yieldExpression: () => 19 });

assertGlobalStmt("switch (x) { case y: }", switchStmt(ident("x"), [1]), { switchCase: () => 1 });
assertGlobalStmt("try { } catch (e) { }", 2, { tryStatement: (b, g, u, f) => u, catchClause: () => 2 });
assertGlobalStmt("try { } catch (e if e instanceof A) { } catch (e if e instanceof B) { }", [2, 2], { tryStatement: (b, g, u, f) => g, catchClause: () => 2 });
assertGlobalStmt("try { } catch (e) { }", tryStmt(blockStmt([]), [], 2, null), { catchClause: () => 2 });
assertGlobalStmt("try { } catch (e if e instanceof A) { } catch (e if e instanceof B) { }",
                 tryStmt(blockStmt([]), [2, 2], null, null),
                 { catchClause: () => 2 });

assertGlobalExpr("({ x: y } = z)", aExpr("=", 1, ident("z")), { objectPattern: () => 1 });
assertGlobalExpr("({ x: y } = z)", aExpr("=", objPatt([2]), ident("z")), { propertyPattern: () => 2 });
assertGlobalExpr("[ x ] = y", aExpr("=", 3, ident("y")), { arrayPattern: () => 3 });

}

runtest(test);
