import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import twig from 'twig';
import path from 'path';

import router from './routes'; 

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', twig.__express);

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.use('/', router)

module.exports = app;