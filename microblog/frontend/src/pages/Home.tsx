import React, { useEffect, useState } from 'react';
import Tweet from '../components/Tweet';

const Home: React.FC = () => {
    const [tweets, setTweets] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await fetch('/api/tweets');
                if (!response.ok) {
                    throw new Error('Failed to fetch tweets');
                }
                const data = await response.json();
                setTweets(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTweets();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Home</h1>
            <div>
                {tweets.map(tweet => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
        </div>
    );
};

export default Home;