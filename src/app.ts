import * as express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log(`server is running on ${3000}`);
});
