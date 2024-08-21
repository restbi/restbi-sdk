export enum DatabaseType {
    POSTGRES = 'POSTGRES',
    MYSQL = 'MYSQL',
    ORACLE = 'ORACLE',
    SQL_SERVER = 'SQL_SERVER',
    SQLITE = 'SQLITE',
    SNOWFLAKE = 'SNOWFLAKE',
}
export enum ColumnDataType {
    STRING = 'STRING',
    NUMBER = 'NUMBER',
    DATE = 'DATE',
    BOOLEAN = 'BOOLEAN',
    JSON = 'JSON',
}
export enum ColumnType {
    MEASURE = 'MEASURE',
    DIMENSION = 'DIMENSION',
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
}
export type Table = {
    id: string;
    dbName: string;
    name: string;
    schema?: string;
    alias?: string;
    validated?: boolean;
    columns: Column[];
}
export type Column = {
    id: string;
    dbName: string;
    name: string;
    alias?: string;
    type?: ColumnType;
    validated?: boolean;
    dataType?: ColumnDataType;
    aggregationType?: string;
}
export type JoinClause = {
    column1: string;
    column2: string;
    operator: string; // e.g., '=', '<>', etc.
};

export type Join = {
    id: string;
    validated?: boolean;
    table1: string;
    table2: string;
    clauses: JoinClause[]; // Now an array of clauses
    joinType?: string; // Optional: e.g., INNER JOIN, LEFT JOIN, etc.
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
}

export type Formula = {
    id: string;
    name: string;
    expression: string;
}
export type Filter = {
    id: string;
    name: string;
    expression: string;
}


export type Query = {
    columns: string[]; // List of column names to select
    filters?: QueryFilter[]; // Optional filters to apply
    sortBy?: string; // Optional column to sort by
    limit?: number; // Optional limit on the number of rows
    dateRange?: DateRangeFilter; // Optional predefined date filter (e.g., this week, last month)
}

export type QueryFilter = {
    column: string; // The column to filter on
    operator: string; // The operator to use (e.g., '=', '>', '<', 'LIKE')
    value: string | number | boolean | Date | string[] | undefined; // The value to filter on
}

export type DateRangeFilter = {
    type: 'thisWeek' | 'lastWeek' | 'thisMonth' | 'lastMonth' | 'custom';
    startDate?: string; // Required if 'custom' type is used
    endDate?: string;   // Required if 'custom' type is used
}

export type SQLResult = {
    columns: string[];  // Array of column names
    rows: Record<string, any>[]; // Array of row objects, where each object represents a row with column names as keys
};
export type SQLError = {
    message: string;
    query: string;
}
export type ValidationResult ={
    model: Model,
    dbTables: Table[]
}