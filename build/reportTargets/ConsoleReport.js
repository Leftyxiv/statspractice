"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleReport = void 0;
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.write = function (message) {
        console.log(message);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
