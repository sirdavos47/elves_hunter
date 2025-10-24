#!/bin/bash

# This script seeds the database with initial data for the microblog application.

# Function to seed tweets
seed_tweets() {
  echo "Seeding tweets..."

  # Example tweet data
  tweets=(
    '{"content": "Hello World!", "author": "User1", "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'
    '{"content": "This is my first tweet!", "author": "User2", "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'
    '{"content": "Loving this new microblogging platform!", "author": "User3", "timestamp": "'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'
  )

  # Loop through each tweet and insert into the database
  for tweet in "${tweets[@]}"; do
    curl -X POST http://localhost:3000/api/tweets -H "Content-Type: application/json" -d "$tweet"
  done

  echo "Tweets seeded successfully."
}

# Main script execution
seed_tweets