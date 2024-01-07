import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.render('pages/dashboard.html', {message: 'Welcome to my life'});
});

export default router;