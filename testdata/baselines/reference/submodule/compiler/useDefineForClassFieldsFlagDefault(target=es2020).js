//// [tests/cases/compiler/useDefineForClassFieldsFlagDefault.ts] ////

//// [useDefineForClassFieldsFlagDefault.ts]
class Foo {
    // For esNext should be emitted 'as is' because useDefineForClassFields defaults to true 
    // For es2020 should be emitted as an assignment after the class definition (not Object.defineProperty) because useDefineForClassFields defaults to false
    static x = 1; 
}

//// [useDefineForClassFieldsFlagDefault.js]
class Foo {
    static x = 1;
}
