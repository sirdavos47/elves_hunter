class TweetController {
    constructor(tweetService) {
        this.tweetService = tweetService;
    }

    async createTweet(req, res) {
        try {
            const { content, author } = req.body;
            const newTweet = await this.tweetService.createTweet(content, author);
            res.status(201).json(newTweet);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTweets(req, res) {
        try {
            const tweets = await this.tweetService.getTweets();
            res.status(200).json(tweets);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteTweet(req, res) {
        try {
            const { id } = req.params;
            await this.tweetService.deleteTweet(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default TweetController;