//// [tests/cases/compiler/ifStatementInternalComments.ts] ////

//// [ifStatementInternalComments.ts]
/*1*/ if /*2*/ ( /*3*/ true /*4*/ ) /*5*/ {}

/*1*/ if /*2*/ ( /*3*/ true /*4*/ ) /*5*/ {} /*6*/ else /*7*/  {}


//// [ifStatementInternalComments.js]
if (true) { }
if (true) { }
else { }
