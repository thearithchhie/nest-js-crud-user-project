import { MigrationInterface, QueryRunner, Table } from "typeorm";
import defaultColumns from "./src/config/defalut-column";

export class users1666397738076 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        let columns: any = [
            {
                name: "username",
                type: "varchar",
                charset: "utf8mb4",
                collation: "utf8mb4_unicode_ci",
            },
            {
                name: "password",
                type: "varchar",
            },
        ];

        columns = [...columns, ...defaultColumns];
        const table = new Table({ name: "User", columns });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
