"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDiacriticalMarks = void 0;
function removeDiacriticalMarks(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
exports.removeDiacriticalMarks = removeDiacriticalMarks;
