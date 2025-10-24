import React from 'react';

interface TweetProps {
    id: string;
    content: string;
    author: string;
    timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ id, content, author, timestamp }) => {
    return (
        <div className="tweet" key={id}>
            <div className="tweet-header">
                <span className="tweet-author">{author}</span>
                <span className="tweet-timestamp">{new Date(timestamp).toLocaleString()}</span>
            </div>
            <div className="tweet-content">{content}</div>
        </div>
    );
};

export default Tweet;