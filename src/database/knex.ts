import knew from 'knex';
import { knexSnakeCaseMappers } from 'objection';

const config = require('./config');

const enviroment = process.env.NODE_ENV || 'development';

export default knew({ ...config[enviroment], ...knexSnakeCaseMappers });