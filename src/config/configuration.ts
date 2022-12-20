import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv'

dotenv.config()
export const databaseConfig: DataSourceOptions = {
    type:'mssql',
    host: process.env.MSSQL_HOST,
    port: parseInt(process.env.MSSQL_PORT,10),
    username: process.env.MSSQL_USER,
    password: process.env.MSSQL_PASS,
    database: process.env.MSSQL_DB,
    entities: [__dirname + '/../**/*.entity{.js,.ts}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
    extra: {
      charset: 'utf8mb4_unicode_ci',
    },
    options: {
        encrypt: false,
        useUTC: true,
      },    
    synchronize: false,
    logging: true,
    migrationsRun: false
}
console.log(databaseConfig)

export default new DataSource({
    ...databaseConfig,
    migrationsRun:true
})