import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './src/routes'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api', apiRoutes);

// app.get('/', (req: Request, res: Response) => {
//     res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
