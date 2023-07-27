import * as dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  //   jwt: {
  //     secret: process.env.JWT_SECRET,
  //     expiresIn: process.env.JWT_EXPIRES_IN,
  //   },
  //   bcrypt: {
  //     salt: parseInt(process.env.BCRYPT_SALT),
  //   },
  //   mail: {
  //     host: process.env.MAIL_HOST,
  //     port: parseInt(process.env.MAIL_PORT),
  //     username: process.env.MAIL_USERNAME,
  //     password: process.env.MAIL_PASSWORD,
  //     from: process.env.MAIL_FROM,
  //   },
};
