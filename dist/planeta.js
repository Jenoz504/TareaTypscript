(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Planeta = void 0;
    var Planeta = /** @class */ (function () {
        function Planeta(_nombre, _gravedad) {
            this.nombre = _nombre;
            this.gravedad = _gravedad;
        }
        return Planeta;
    }());
    exports.Planeta = Planeta;
});
