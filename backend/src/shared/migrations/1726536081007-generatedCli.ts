import { MigrationInterface, QueryRunner } from "typeorm";

export class GeneratedCli1726536081007 implements MigrationInterface {
    name = 'GeneratedCli1726536081007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "address1" character varying NOT NULL, "address2" character varying NOT NULL, "townOrCity" character varying NOT NULL, "postcode" character varying NOT NULL, "country" character varying NOT NULL, "location" character varying NOT NULL, "stadiumId" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transfer" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "playerId" integer NOT NULL, "sourceTeamId" integer NOT NULL, "destinationTeamId" integer NOT NULL, "transferFee" integer NOT NULL, "date" TIMESTAMP NOT NULL, "isLoan" boolean NOT NULL, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "player" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "nickname" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "nationality" character varying NOT NULL, "positionId" integer NOT NULL, "teamIds" integer array NOT NULL, "kitNumber" integer NOT NULL, "height" integer, "weight" integer, "photoUrl" character varying NOT NULL, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "goal" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "minute" integer NOT NULL, "scorerId" integer NOT NULL, "assistantId" integer NOT NULL, "fixtureId" integer NOT NULL, "teamId" integer NOT NULL, "ownGoal" boolean NOT NULL, "penalty" boolean NOT NULL, CONSTRAINT "PK_88c8e2b461b711336c836b1e130" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "referee" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "nationality" character varying NOT NULL, CONSTRAINT "PK_e0f1d9028c5872562b234fae470" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fixtureReferee" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fixtureId" integer NOT NULL, "refereeId" integer NOT NULL, "role" "public"."fixtureReferee_role_enum" NOT NULL DEFAULT 'Main', CONSTRAINT "PK_bd6d62d26973867ecb73f440feb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "managerEmployment" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "managerId" integer NOT NULL, "teamId" integer NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "isCurrent" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_9b72296d76bfa6a18df7f4e3a8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manager" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "nickname" character varying NOT NULL, "nationality" character varying NOT NULL, "teamIds" integer array NOT NULL, CONSTRAINT "PK_b3ac840005ee4ed76a7f1c51d01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "substitution" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fixtureId" integer NOT NULL, "teamId" integer NOT NULL, "countryId" integer NOT NULL, "playerInId" integer NOT NULL, "playerOutId" integer NOT NULL, "minute" integer NOT NULL, "playerLineupId" integer, CONSTRAINT "PK_35cec3f6b188471602d3dd605fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "playerLineup" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "lineupId" integer NOT NULL, "playerId" integer NOT NULL, "isStarting" boolean NOT NULL, "positionId" integer, "isCaptain" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_06296110be2043b5e154e250689" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lineUp" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fixtureId" integer NOT NULL, "teamId" integer NOT NULL, "managerId" integer NOT NULL, "teamType" "public"."lineUp_teamtype_enum" NOT NULL DEFAULT 'Home', "formation" character varying NOT NULL, CONSTRAINT "PK_87b245210ef8217b18d6879965f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fixture" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "date" TIMESTAMP NOT NULL, "homeTeamId" integer NOT NULL, "awayTeamId" integer NOT NULL, "competitionId" integer NOT NULL, "seasonId" integer NOT NULL, "stadiumId" integer NOT NULL, "status" character varying NOT NULL DEFAULT 'Scheduled', "attendance" integer, "teamCompetitionSeasonsId" integer, CONSTRAINT "PK_d9634ba06480dc240af97ad548c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stadium" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "opened" character varying NOT NULL, "teamIds" integer array, "capacity" integer NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "PK_e1fec3f13003877cd87a990655d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "founded" integer NOT NULL, "stadiumIds" integer array, "managerId" integer, "playerIds" integer array, "logoUrl" character varying NOT NULL, "website" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, "type" "public"."team_type_enum" NOT NULL, "parentId" integer NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "season" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "yearStart" integer NOT NULL, "yearEnd" integer NOT NULL, CONSTRAINT "PK_8ac0d081dbdb7ab02d166bcda9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teamCompetitionSeason" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "teamId" integer NOT NULL, "competitionId" integer NOT NULL, "seasonId" integer NOT NULL, "points" integer, "position" integer, CONSTRAINT "PK_a9c67e881487e9531903f8a1a77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "competition" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "type" "public"."competition_type_enum" NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_a52a6248db574777b226e9445bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "trophy" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "description" character varying, "yearIntroduced" integer, "competitionId" integer, CONSTRAINT "PK_36c7cac00e373b7c3a7e6da3108" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "userName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'USER', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "position" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "abbreviation" character varying NOT NULL, CONSTRAINT "PK_b7f483581562b4dc62ae1a5b7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "log" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "home" character varying NOT NULL, "away" character varying NOT NULL, "stadium" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "competition" character varying NOT NULL, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "injury" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "playerId" integer NOT NULL, "injuryType" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_66d2dc21ce6d7f55b3d6d45a57a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genericToken" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "token" character varying NOT NULL, "type" character varying NOT NULL, "expiry" character varying NOT NULL, "userEmail" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_9cda1245cc86afda14979b9e38b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "fixtureId" integer NOT NULL, "playerId" integer NOT NULL, "type" "public"."card_type_enum" NOT NULL, "minute" integer NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_08e149cf789e807bd4c159209df" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_9e2f44554b82ed26467021e778c" FOREIGN KEY ("sourceTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_aae2e203df0a6728c8f53b3135a" FOREIGN KEY ("destinationTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goal" ADD CONSTRAINT "FK_4bb5747667b59b80b60d2bfe3f0" FOREIGN KEY ("scorerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goal" ADD CONSTRAINT "FK_8f3b9ec15c84e8fafdd8b6573f2" FOREIGN KEY ("assistantId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goal" ADD CONSTRAINT "FK_e6c507211b227d4969c286cba24" FOREIGN KEY ("fixtureId") REFERENCES "fixture"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixtureReferee" ADD CONSTRAINT "FK_74a17fb7b147d7d49870e83d48a" FOREIGN KEY ("fixtureId") REFERENCES "fixture"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixtureReferee" ADD CONSTRAINT "FK_57e39a0cce496e3803ab29d78a8" FOREIGN KEY ("refereeId") REFERENCES "referee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "managerEmployment" ADD CONSTRAINT "FK_1145a6db739fd126120fbcb4113" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "managerEmployment" ADD CONSTRAINT "FK_8335b217176b4591fdf5f48a45d" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "substitution" ADD CONSTRAINT "FK_be89986538d25536141f6acb2fd" FOREIGN KEY ("playerLineupId") REFERENCES "playerLineup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "substitution" ADD CONSTRAINT "FK_a660e1abaf603d5b84a6f50be8c" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "substitution" ADD CONSTRAINT "FK_e0ac35ba09b431833686863f748" FOREIGN KEY ("playerInId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "substitution" ADD CONSTRAINT "FK_4444ca86d061c4cc292728f8fb2" FOREIGN KEY ("playerOutId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "playerLineup" ADD CONSTRAINT "FK_bd834cfe3652b49a2aaeab5a549" FOREIGN KEY ("lineupId") REFERENCES "lineUp"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "playerLineup" ADD CONSTRAINT "FK_1bee1b61506db1feb9fbf79654b" FOREIGN KEY ("playerId") REFERENCES "player"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lineUp" ADD CONSTRAINT "FK_acb73905c60973cb34a9eac548f" FOREIGN KEY ("fixtureId") REFERENCES "fixture"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lineUp" ADD CONSTRAINT "FK_861c68784085f3e1a3bc8abe0a1" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lineUp" ADD CONSTRAINT "FK_27622adb1e125d02230af152c63" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixture" ADD CONSTRAINT "FK_abbb9dc0c9aca6312eee7d54ad7" FOREIGN KEY ("homeTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixture" ADD CONSTRAINT "FK_6abf61842adc90eb78ccbdbfe01" FOREIGN KEY ("awayTeamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixture" ADD CONSTRAINT "FK_d654c40cfe3e568102f6b6a661f" FOREIGN KEY ("teamCompetitionSeasonsId") REFERENCES "teamCompetitionSeason"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fixture" ADD CONSTRAINT "FK_161ad95605a1ed5a93f13131334" FOREIGN KEY ("stadiumId") REFERENCES "stadium"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "FK_82b816660e91be06f88e130a99b" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" ADD CONSTRAINT "FK_31ec18167f7bc938bb5aed40710" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" ADD CONSTRAINT "FK_024baab1331d726adf3df1e76b5" FOREIGN KEY ("competitionId") REFERENCES "competition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" ADD CONSTRAINT "FK_720c7254209506368e0f3574c18" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "trophy" ADD CONSTRAINT "FK_f25f081663b2ae8567963e3bd9c" FOREIGN KEY ("competitionId") REFERENCES "competition"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "trophy" DROP CONSTRAINT "FK_f25f081663b2ae8567963e3bd9c"`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" DROP CONSTRAINT "FK_720c7254209506368e0f3574c18"`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" DROP CONSTRAINT "FK_024baab1331d726adf3df1e76b5"`);
        await queryRunner.query(`ALTER TABLE "teamCompetitionSeason" DROP CONSTRAINT "FK_31ec18167f7bc938bb5aed40710"`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "FK_82b816660e91be06f88e130a99b"`);
        await queryRunner.query(`ALTER TABLE "fixture" DROP CONSTRAINT "FK_161ad95605a1ed5a93f13131334"`);
        await queryRunner.query(`ALTER TABLE "fixture" DROP CONSTRAINT "FK_d654c40cfe3e568102f6b6a661f"`);
        await queryRunner.query(`ALTER TABLE "fixture" DROP CONSTRAINT "FK_6abf61842adc90eb78ccbdbfe01"`);
        await queryRunner.query(`ALTER TABLE "fixture" DROP CONSTRAINT "FK_abbb9dc0c9aca6312eee7d54ad7"`);
        await queryRunner.query(`ALTER TABLE "lineUp" DROP CONSTRAINT "FK_27622adb1e125d02230af152c63"`);
        await queryRunner.query(`ALTER TABLE "lineUp" DROP CONSTRAINT "FK_861c68784085f3e1a3bc8abe0a1"`);
        await queryRunner.query(`ALTER TABLE "lineUp" DROP CONSTRAINT "FK_acb73905c60973cb34a9eac548f"`);
        await queryRunner.query(`ALTER TABLE "playerLineup" DROP CONSTRAINT "FK_1bee1b61506db1feb9fbf79654b"`);
        await queryRunner.query(`ALTER TABLE "playerLineup" DROP CONSTRAINT "FK_bd834cfe3652b49a2aaeab5a549"`);
        await queryRunner.query(`ALTER TABLE "substitution" DROP CONSTRAINT "FK_4444ca86d061c4cc292728f8fb2"`);
        await queryRunner.query(`ALTER TABLE "substitution" DROP CONSTRAINT "FK_e0ac35ba09b431833686863f748"`);
        await queryRunner.query(`ALTER TABLE "substitution" DROP CONSTRAINT "FK_a660e1abaf603d5b84a6f50be8c"`);
        await queryRunner.query(`ALTER TABLE "substitution" DROP CONSTRAINT "FK_be89986538d25536141f6acb2fd"`);
        await queryRunner.query(`ALTER TABLE "managerEmployment" DROP CONSTRAINT "FK_8335b217176b4591fdf5f48a45d"`);
        await queryRunner.query(`ALTER TABLE "managerEmployment" DROP CONSTRAINT "FK_1145a6db739fd126120fbcb4113"`);
        await queryRunner.query(`ALTER TABLE "fixtureReferee" DROP CONSTRAINT "FK_57e39a0cce496e3803ab29d78a8"`);
        await queryRunner.query(`ALTER TABLE "fixtureReferee" DROP CONSTRAINT "FK_74a17fb7b147d7d49870e83d48a"`);
        await queryRunner.query(`ALTER TABLE "goal" DROP CONSTRAINT "FK_e6c507211b227d4969c286cba24"`);
        await queryRunner.query(`ALTER TABLE "goal" DROP CONSTRAINT "FK_8f3b9ec15c84e8fafdd8b6573f2"`);
        await queryRunner.query(`ALTER TABLE "goal" DROP CONSTRAINT "FK_4bb5747667b59b80b60d2bfe3f0"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_aae2e203df0a6728c8f53b3135a"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_9e2f44554b82ed26467021e778c"`);
        await queryRunner.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_08e149cf789e807bd4c159209df"`);
        await queryRunner.query(`DROP TABLE "card"`);
        await queryRunner.query(`DROP TABLE "genericToken"`);
        await queryRunner.query(`DROP TABLE "injury"`);
        await queryRunner.query(`DROP TABLE "log"`);
        await queryRunner.query(`DROP TABLE "position"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "trophy"`);
        await queryRunner.query(`DROP TABLE "competition"`);
        await queryRunner.query(`DROP TABLE "teamCompetitionSeason"`);
        await queryRunner.query(`DROP TABLE "season"`);
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "stadium"`);
        await queryRunner.query(`DROP TABLE "fixture"`);
        await queryRunner.query(`DROP TABLE "lineUp"`);
        await queryRunner.query(`DROP TABLE "playerLineup"`);
        await queryRunner.query(`DROP TABLE "substitution"`);
        await queryRunner.query(`DROP TABLE "manager"`);
        await queryRunner.query(`DROP TABLE "managerEmployment"`);
        await queryRunner.query(`DROP TABLE "fixtureReferee"`);
        await queryRunner.query(`DROP TABLE "referee"`);
        await queryRunner.query(`DROP TABLE "goal"`);
        await queryRunner.query(`DROP TABLE "player"`);
        await queryRunner.query(`DROP TABLE "transfer"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}