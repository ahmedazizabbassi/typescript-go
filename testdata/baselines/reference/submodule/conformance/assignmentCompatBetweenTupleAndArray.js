//// [tests/cases/conformance/types/typeRelationships/assignmentCompatibility/assignmentCompatBetweenTupleAndArray.ts] ////

//// [assignmentCompatBetweenTupleAndArray.ts]
var numStrTuple: [number, string];
var numNumTuple: [number, number];
var numEmptyObjTuple: [number, {}];
var emptyObjTuple: [{}];

var numArray: number[];
var emptyObjArray: {}[];

// no error
numArray = numNumTuple;
emptyObjArray = emptyObjTuple;
emptyObjArray = numStrTuple;
emptyObjArray = numNumTuple;
emptyObjArray = numEmptyObjTuple;

// error
numArray = numStrTuple;
emptyObjTuple = emptyObjArray;


//// [assignmentCompatBetweenTupleAndArray.js]
var numStrTuple;
var numNumTuple;
var numEmptyObjTuple;
var emptyObjTuple;
var numArray;
var emptyObjArray;
numArray = numNumTuple;
emptyObjArray = emptyObjTuple;
emptyObjArray = numStrTuple;
emptyObjArray = numNumTuple;
emptyObjArray = numEmptyObjTuple;
numArray = numStrTuple;
emptyObjTuple = emptyObjArray;
