//// [tests/cases/compiler/propertiesAndIndexersForNumericNames.ts] ////

//// [propertiesAndIndexersForNumericNames.ts]
class C {
    [i: number]: number;

    // These all have numeric names; they should error
    // because their types are not compatible with the numeric indexer.
    public "1": string = "number"; // Error
    public "-1": string = "negative number"; // Error
    public "-2.5": string = "negative number"; // Error
    public "3.141592": string = "pi-sitive number"; // Error
    public "1.2e-20": string = "really small number"; // Error
    public "Infinity": string = "A gillion"; // Error
    public "-Infinity": string = "Negative-a-gillion"; // Error
    public "NaN": string = "not a number"; // Error
    
    // These all have *partially* numeric names,
    // but should really be treated as plain string literals.
    public " 1": string = "leading space"; // No error
    public "1    ": string = "trailing space"; // No error
    public "": string = "no nothing"; // No error
    public "    ": string = "just space"; // No error
    public "1 0 1": string = "several numbers and spaces"; // No error
    public "hunter2": string = "not a password"; // No error
    public "+Infinity": string = "A gillion"; // No error
    public "+NaN": string = "not a positive number"; // No error
    public "-NaN": string = "not a negative number"; // No error
    

    // These fall into the above category, however, they are "trickier";
    // these all are *scanned* as numeric literals, but they are not written in
    // "canonical" numeric representations.
    public "+1": string = "positive number (for the paranoid)"; // No error
    public "1e0": string = "just one"; // No error
    public "-0": string = "just zero"; // No error
    public "-0e0": string = "just zero"; // No error
    public "0xF00D": string = "hex food"; // No error
    public "0xBEEF": string = "hex beef"; // No error
    public "0123": string = "oct 83"; // No error
    public "0o123": string = "explicit oct 83"; // No error
    public "0b101101001010": string = "explicit binary"; // No error
    public "0.000000000000000000012": string = "should've been in exponential form"; // No error
}


//// [propertiesAndIndexersForNumericNames.js]
class C {
    "1" = "number";
    "-1" = "negative number";
    "-2.5" = "negative number";
    "3.141592" = "pi-sitive number";
    "1.2e-20" = "really small number";
    "Infinity" = "A gillion";
    "-Infinity" = "Negative-a-gillion";
    "NaN" = "not a number";
    " 1" = "leading space";
    "1    " = "trailing space";
    "" = "no nothing";
    "    " = "just space";
    "1 0 1" = "several numbers and spaces";
    "hunter2" = "not a password";
    "+Infinity" = "A gillion";
    "+NaN" = "not a positive number";
    "-NaN" = "not a negative number";
    "+1" = "positive number (for the paranoid)";
    "1e0" = "just one";
    "-0" = "just zero";
    "-0e0" = "just zero";
    "0xF00D" = "hex food";
    "0xBEEF" = "hex beef";
    "0123" = "oct 83";
    "0o123" = "explicit oct 83";
    "0b101101001010" = "explicit binary";
    "0.000000000000000000012" = "should've been in exponential form";
}
