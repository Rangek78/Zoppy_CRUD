import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1762723314120 implements MigrationInterface {
    name = 'InitialMigration1762723314120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`produto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(30) NOT NULL, \`valorDeCompra\` float NOT NULL, \`valorDeVenda\` float NOT NULL, \`observacoes\` text NOT NULL, UNIQUE INDEX \`IDX_1c1927cfd2f54756f9ed55289c\` (\`nome\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1c1927cfd2f54756f9ed55289c\` ON \`produto\``);
        await queryRunner.query(`DROP TABLE \`produto\``);
    }

}
