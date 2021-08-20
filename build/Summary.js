"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
;
;
var Summary = /** @class */ (function () {
    function Summary(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    ;
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.output.write(output);
    };
    return Summary;
}());
exports.Summary = Summary;
;
