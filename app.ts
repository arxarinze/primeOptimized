import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import env from './src/utils/config';
import prime from './src/routes/prime.route';
const app = express();
const port = env.PORT;
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Primality');
});
app.use(`/prime`, prime)
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});

export default app