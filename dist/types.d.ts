export declare enum DatabaseType {
    POSTGRES = "POSTGRES",
    MYSQL = "MYSQL",
    ORACLE = "ORACLE",
    SQL_SERVER = "SQL_SERVER",
    SQLITE = "SQLITE",
    SNOWFLAKE = "SNOWFLAKE"
}
export declare enum ColumnDataType {
    STRING = "STRING",
    NUMBER = "NUMBER",
    DATE = "DATE",
    BOOLEAN = "BOOLEAN",
    JSON = "JSON"
}
export declare enum ColumnType {
    MEASURE = "MEASURE",
    DIMENSION = "DIMENSION"
}
export type Connection = {
    id: string;
    name: string;
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    type: DatabaseType;
    schema?: string;
    warehouse?: string;
    role?: string;
};
export type Table = {
    id: string;
    dbName: string;
    name: string;
    schema?: string;
    alias?: string;
    validated?: boolean;
    columns: Column[];
};
export type Column = {
    id: string;
    dbName: string;
    name: string;
    alias?: string;
    type?: ColumnType;
    validated?: boolean;
    dataType?: ColumnDataType;
    aggregationType?: string;
};
export type JoinClause = {
    column1: string;
    column2: string;
    operator: string;
};
export type Join = {
    id: string;
    validated?: boolean;
    table1: string;
    table2: string;
    clauses: JoinClause[];
    joinType?: string;
};
export type Model = {
    id: string;
    name: string;
    displayName?: string;
    connection: Connection;
    tables: Table[];
    joins: Join[];
    formulas: Formula[];
    filters: Filter[];
};
export type Formula = {
    id: string;
    name: string;
    expression: string;
};
export type Filter = {
    id: string;
    name: string;
    expression: string;
};
export type Query = {
    columns: string[];
    filters?: QueryFilter[];
    sortBy?: SortClause | SortClause[];
    limit?: number;
    offset?: number;
};
export declare enum SortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export type SortClause = {
    name: string;
    direction: SortDirection;
};
export type QueryFilter = {
    column: string;
    operator: string;
    value: string | number | boolean | Date | string[] | undefined;
};
export type DateRangeFilter = {
    type: 'thisWeek' | 'lastWeek' | 'thisMonth' | 'lastMonth' | 'custom';
    startDate?: string;
    endDate?: string;
};
export type SQLResult = {
    columns: string[];
    rows: Record<string, any>[];
};
export type SQLError = {
    message: string;
    query: string;
};
export type ValidationResult = {
    model: Model;
    dbTables: Table[];
};
//# sourceMappingURL=types.d.ts.map