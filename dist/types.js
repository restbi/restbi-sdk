"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortDirection = exports.ColumnType = exports.ColumnDataType = exports.DatabaseType = void 0;
var DatabaseType;
(function (DatabaseType) {
    DatabaseType["POSTGRES"] = "POSTGRES";
    DatabaseType["MYSQL"] = "MYSQL";
    DatabaseType["ORACLE"] = "ORACLE";
    DatabaseType["SQL_SERVER"] = "SQL_SERVER";
    DatabaseType["SQLITE"] = "SQLITE";
    DatabaseType["SNOWFLAKE"] = "SNOWFLAKE";
})(DatabaseType = exports.DatabaseType || (exports.DatabaseType = {}));
var ColumnDataType;
(function (ColumnDataType) {
    ColumnDataType["STRING"] = "STRING";
    ColumnDataType["NUMBER"] = "NUMBER";
    ColumnDataType["DATE"] = "DATE";
    ColumnDataType["BOOLEAN"] = "BOOLEAN";
    ColumnDataType["JSON"] = "JSON";
})(ColumnDataType = exports.ColumnDataType || (exports.ColumnDataType = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["MEASURE"] = "MEASURE";
    ColumnType["DIMENSION"] = "DIMENSION";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["ASC"] = "ASC";
    SortDirection["DESC"] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
