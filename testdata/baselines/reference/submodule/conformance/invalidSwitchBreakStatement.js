//// [tests/cases/conformance/statements/breakStatements/invalidSwitchBreakStatement.ts] ////

//// [invalidSwitchBreakStatement.ts]
// break is not allowed in a switch statement

switch (12) {
    case 5:
        break;
}


//// [invalidSwitchBreakStatement.js]
switch (12) {
    case 5:
        break;
}
