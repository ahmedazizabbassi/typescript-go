//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithObjectMembers5.ts] ////

//// [subtypingWithObjectMembers5.ts]
interface Base {
    foo: string;
}

interface Derived extends Base {
    bar: string;
}

// N and M have the same name, same accessibility, same optionality, and N is a subtype of M
// foo properties are valid, bar properties cause errors in the derived class declarations
module NotOptional {
    interface A {
        foo: Base;
    }

    class B implements A {
        fooo: Derived; // error
    }

    interface A2 {
        1: Base;
    }

    class B2 implements A2 {
        2: Derived; // error
    }

    interface A3 {
        '1': Base;
    }

    class B3 implements A3 {
        '1.0': Derived; // error
    }
}

// same cases as above but with optional
module Optional {
    interface A {
        foo?: Base;
    }

    class B implements A {
        fooo: Derived; // weak type error
    }

    interface A2 {
        1?: Base;
    }

    class B2 implements A2 {
        2: Derived; // weak type error
    }

    interface A3 {
        '1'?: Base;
    }

    class B3 implements A3 {
        '1.0': Derived; // weak type error
    }
}


//// [subtypingWithObjectMembers5.js]
var NotOptional;
(function (NotOptional) {
    class B {
        fooo;
    }
    class B2 {
        2;
    }
    class B3 {
        '1.0';
    }
})(NotOptional || (NotOptional = {}));
var Optional;
(function (Optional) {
    class B {
        fooo;
    }
    class B2 {
        2;
    }
    class B3 {
        '1.0';
    }
})(Optional || (Optional = {}));
