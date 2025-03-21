//// [tests/cases/conformance/parser/ecmascript5/parserS7.9_A5.7_T1.ts] ////

//// [parserS7.9_A5.7_T1.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Since LineTerminator(LT) between Postfix Increment/Decrement Operator(I/DO) and operand is not allowed, two IO(just as two DO and their combination)
 * between two references separated by [LT] after automatic semicolon insertion lead to syntax error
 *
 * @path ch07/7.9/S7.9_A5.7_T1.js
 * @description Try use Variable1 \n ++ \n ++ \n Variable2 construction
 * @negative
 */

var x=0, y=0;
var z=
x
++
++
y



//// [parserS7.9_A5.7_T1.js]
var x = 0, y = 0;
var z = x;
++;
++y;
