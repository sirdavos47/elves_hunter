import { Request, Response } from 'express';
import { TweetController } from '../../src/controllers/tweetController';

describe('TweetController', () => {
    let tweetController: TweetController;

    beforeEach(() => {
        tweetController = new TweetController();
    });

    describe('createTweet', () => {
        it('should create a new tweet and return it', async () => {
            const req = {
                body: {
                    content: 'This is a test tweet',
                    author: 'testUser'
                }
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            await tweetController.createTweet(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
                content: 'This is a test tweet',
                author: 'testUser'
            }));
        });
    });

    describe('getTweets', () => {
        it('should return a list of tweets', async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            await tweetController.getTweets(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.any(Array));
        });
    });

    describe('deleteTweet', () => {
        it('should delete a tweet and return a success message', async () => {
            const req = {
                params: {
                    id: '1'
                }
            } as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            await tweetController.deleteTweet(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Tweet deleted successfully' });
        });
    });
});