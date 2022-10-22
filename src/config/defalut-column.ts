import { TableColumn } from "typeorm";
import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export default [
  {
    name: "id",
    type: "integer",
    isPrimary: true,
    isGenerated: true,
    generationStrategy: "increment",
  },
  {
    name: "state",
    type: "integer",
    isNullable: false,
    default: 1,
  },
  {
    name: "createdBy",
    type: "integer",
    isNullable: true,
  },
  {
    name: "updatedBy",
    type: "integer",
    isNullable: true,
  },
  {
    name: "createdAt",
    type: "datetime(6)",
    default: "CURRENT_TIMESTAMP(6)",
  },
  {
    name: "updatedAt",
    type: "datetime(6)",
    isNullable: false,
    default: "CURRENT_TIMESTAMP(6)",
  },
].map((column) => new TableColumn(column as TableColumnOptions));
