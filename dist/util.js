"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferColumnType = void 0;
const types_1 = require("./types");
const inferColumnType = (column) => {
    if (column.type) {
        return column.type;
    }
    return column.dataType === types_1.ColumnDataType.NUMBER ? types_1.ColumnType.MEASURE : types_1.ColumnType.DIMENSION;
};
exports.inferColumnType = inferColumnType;
