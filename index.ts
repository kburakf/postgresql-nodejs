import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import knex from './src/database/knex';
import { Model } from 'objection';
import todos from './src/routes/todos';

Model.knex(knex);

const app = express();
const port = 3001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`The port is running on '${port}'`);
});

app.use('/todos', todos);

export default app;