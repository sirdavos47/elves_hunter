import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Component', () => {
  test('renders the Home component', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Tweets/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('fetches and displays tweets', async () => {
    // Mock the fetch function to return a sample tweet
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, content: 'Hello World', author: 'User1', timestamp: '2023-01-01T00:00:00Z' }]),
      })
    );

    render(<Home />);
    
    // Wait for the tweet to be displayed
    const tweetElement = await screen.findByText(/Hello World/i);
    expect(tweetElement).toBeInTheDocument();

    // Clean up the mock
    global.fetch.mockClear();
  });
});