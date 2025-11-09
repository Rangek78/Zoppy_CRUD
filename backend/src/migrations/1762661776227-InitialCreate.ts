import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialCreate1762661776227 implements MigrationInterface {
    name = 'InitialCreate1762661776227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`produto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(10) NOT NULL, \`valor\` float NOT NULL, UNIQUE INDEX \`IDX_1c1927cfd2f54756f9ed55289c\` (\`nome\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_1c1927cfd2f54756f9ed55289c\` ON \`produto\``);
        await queryRunner.query(`DROP TABLE \`produto\``);
    }

}
