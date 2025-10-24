export interface Tweet {
    id: string;
    content: string;
    author: string;
    timestamp: Date;
}

export class TweetModel {
    private tweets: Tweet[] = [];

    public createTweet(content: string, author: string): Tweet {
        const newTweet: Tweet = {
            id: this.generateId(),
            content,
            author,
            timestamp: new Date(),
        };
        this.tweets.push(newTweet);
        return newTweet;
    }

    public getTweets(): Tweet[] {
        return this.tweets;
    }

    public deleteTweet(id: string): boolean {
        const index = this.tweets.findIndex(tweet => tweet.id === id);
        if (index !== -1) {
            this.tweets.splice(index, 1);
            return true;
        }
        return false;
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}