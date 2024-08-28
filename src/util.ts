import { ColumnType, ColumnDataType } from "./types";

export const inferColumnType = (column: any): ColumnType => {
    if (column.type) {
      return column.type;
    }
    return column.dataType === ColumnDataType.NUMBER ? ColumnType.MEASURE : ColumnType.DIMENSION;
  };