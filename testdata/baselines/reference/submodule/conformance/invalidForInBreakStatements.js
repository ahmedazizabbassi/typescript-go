//// [tests/cases/conformance/statements/breakStatements/invalidForInBreakStatements.ts] ////

//// [invalidForInBreakStatements.ts]
// All errors

// naked break not allowed
break;

// non-existent label
ONE:
for (var x in {}) break TWO;

// break from inside function
TWO:
for (var x in {}) {
    var fn = () => {
        break TWO;
    }
}

THREE:
for (var x in {}) {
    var fn = function () {
        break THREE;
    }
}

// break forward
for (var x in {}) {
    break FIVE;
    FIVE:
    for (var x in {}) { }
}

// label on non-loop statement
NINE:
var y = 12;

for (var x in {}) {
    break NINE;
}

//// [invalidForInBreakStatements.js]
break;
ONE: for (var x in {})
    break TWO;
TWO: for (var x in {}) {
    var fn = () => {
        break TWO;
    };
}
THREE: for (var x in {}) {
    var fn = function () {
        break THREE;
    };
}
for (var x in {}) {
    break FIVE;
    FIVE: for (var x in {}) { }
}
NINE: var y = 12;
for (var x in {}) {
    break NINE;
}
