//// [tests/cases/conformance/es6/for-ofStatements/for-of23.ts] ////

//// [for-of23.ts]
class Foo { }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}

for (const v of new FooIterator) {
    const v = 0; // new scope
}

//// [for-of23.js]
class Foo {
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
for (const v of new FooIterator) {
    const v = 0;
}
