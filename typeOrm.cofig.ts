import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
import k from 'src/k';
dotenv.config();

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: k.database.host,
  port: k.database.port,
  username: k.database.username,
  password: k.database.password,
  database: k.database.database,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormConfig;
