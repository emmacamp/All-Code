import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();
app.use(cors());
app.use(express.json());
app.set('port', 3000);
router(app);


export default app;