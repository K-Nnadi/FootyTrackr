import { join } from 'path';
import { DataSource } from 'typeorm';
require('dotenv').config();

console.log('PATH:', join(__dirname, '../../', 'src/api/modules/**/*{.ts,.js}'));

export default new DataSource({
	// @ts-ignore
	type: process.env.DATABASE_TYPE,
	host: process.env.DATABASE_HOST,
	// @ts-ignore
	port: process.env.DATABASE_PORT,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	entities: [ join(__dirname, '../../', 'src/api/modules/**/*{.ts,.js}')],
	autoLoadEntities: false,
	migrationsRun: false,
	synchronize: false,
	logging: true,
	migrations: ['src/shared/migrations/*{.ts,.js}'],
	cli: {
		migrationsDir: 'src/shared/migrations'
	}
});
