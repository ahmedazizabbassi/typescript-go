//// [tests/cases/conformance/types/typeParameters/typeParameterLists/innerTypeParameterShadowingOuterOne2.ts] ////

//// [innerTypeParameterShadowingOuterOne2.ts]
// inner type parameters shadow outer ones of the same name
// no errors expected

class C<T extends Date> {
    g<T extends Number>() {
        var x: T;
        x.toFixed();
    }

    h() {
        var x: T;
        x.getDate();
    }
}

class C2<T extends Date, U extends Date> {
    g<T extends Number, U extends Number>() {
        var x: U;
        x.toFixed();
    }

    h() {
        var x: U;
        x.getDate();
    }
}
//class C2<T extends Date, U extends T> {
//    g<T extends Number, U extends T>() {
//        var x: U;
//        x.toFixed();
//    }

//    h() {
//        var x: U;
//        x.getDate();
//    }
//}

//// [innerTypeParameterShadowingOuterOne2.js]
class C {
    g() {
        var x;
        x.toFixed();
    }
    h() {
        var x;
        x.getDate();
    }
}
class C2 {
    g() {
        var x;
        x.toFixed();
    }
    h() {
        var x;
        x.getDate();
    }
}
