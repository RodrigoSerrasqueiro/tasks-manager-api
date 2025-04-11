import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
const app = express();
// app.use((_, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "POST, GET, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());
app.use('/api', routes);
export default app;
