//// [tests/cases/compiler/moduleResolutionNoResolve.ts] ////

//// [a.ts]
import a = require('./b');

//// [b.ts]
export var c = '';


//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
exports.c = '';
//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
