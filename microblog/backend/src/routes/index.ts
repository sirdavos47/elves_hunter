import { Router } from 'express';
import TweetController from '../controllers/tweetController';

const router = Router();
const tweetController = new TweetController();

export function setRoutes(app) {
    router.post('/tweets', tweetController.createTweet.bind(tweetController));
    router.get('/tweets', tweetController.getTweets.bind(tweetController));
    router.delete('/tweets/:id', tweetController.deleteTweet.bind(tweetController));

    app.use('/api', router);
}