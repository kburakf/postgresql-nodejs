import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import knex from './src/database/knex';
import { Model } from 'objection';
import todos from './src/routes/todos';
import users from './src/routes/users';

Model.knex(knex);

const app = express();
const port = 3001;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));


app.use('/todos', todos);
app.use('/users', users);

app.listen(port, () => {
  console.log(`The port is running on '${port}'`);
});

export default app;