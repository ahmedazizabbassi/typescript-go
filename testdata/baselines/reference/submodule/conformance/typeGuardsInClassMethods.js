//// [tests/cases/conformance/expressions/typeGuards/typeGuardsInClassMethods.ts] ////

//// [typeGuardsInClassMethods.ts]
// Note that type guards affect types of variables and parameters only and 
// have no effect on members of objects such as properties. 

// variables in global
var num: number;
var var1: string | number;
class C1 {
    constructor(param: string | number) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // variables in function declaration
        var var2: string | number;
        num = typeof var2 === "string" && var2.length; // string

        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    private p1(param: string | number) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // variables in function declaration
        var var2: string | number;
        num = typeof var2 === "string" && var2.length; // string

        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    p2(param: string | number) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // variables in function declaration
        var var2: string | number;
        num = typeof var2 === "string" && var2.length; // string

        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    private static s1(param: string | number) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // variables in function declaration
        var var2: string | number;
        num = typeof var2 === "string" && var2.length; // string

        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
    // Inside function declaration
    static s2(param: string | number) {
        // global vars in function declaration
        num = typeof var1 === "string" && var1.length; // string

        // variables in function declaration
        var var2: string | number;
        num = typeof var2 === "string" && var2.length; // string

        // parameters in function declaration
        num = typeof param === "string" && param.length; // string
    }
}


//// [typeGuardsInClassMethods.js]
var num;
var var1;
class C1 {
    constructor(param) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        num = typeof var2 === "string" && var2.length;
        num = typeof param === "string" && param.length;
    }
    p1(param) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        num = typeof var2 === "string" && var2.length;
        num = typeof param === "string" && param.length;
    }
    p2(param) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        num = typeof var2 === "string" && var2.length;
        num = typeof param === "string" && param.length;
    }
    static s1(param) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        num = typeof var2 === "string" && var2.length;
        num = typeof param === "string" && param.length;
    }
    static s2(param) {
        num = typeof var1 === "string" && var1.length;
        var var2;
        num = typeof var2 === "string" && var2.length;
        num = typeof param === "string" && param.length;
    }
}
