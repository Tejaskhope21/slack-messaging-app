## Slack Messaging App
A Node.js application to interact with Slack's API, allowing users to authenticate via Slack OAuth, send messages, schedule messages, retrieve message history, edit messages, and delete messages in a specified Slack channel.
Table of Contents

### Project Overview
Prerequisites
Setup Instructions
File Structure
Usage
Testing with Postman
Expected Output
License

## Project Overview
This project is a RESTful API built with Node.js and Express, integrated with the Slack API to perform the following operations:

Authenticate via Slack OAuth
Send messages to a Slack channel
Schedule messages for future delivery
Retrieve message history
Edit existing messages
Delete messages

The app uses the Slack Developer Sandbox for testing and requires a Slack App configuration.
Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)
Slack Workspace (for testing in Slack Developer Sandbox)
Postman (for testing API endpoints)
Slack App credentials (Client ID, Client Secret, Bot Token, Signing Secret)

## Setup Instructions

Create the Project Directory
mkdir slack-messaging-app && cd slack-messaging-app
npm init -y
npm install express axios dotenv body-parser


Create .env FileIn the project root, create a .env file and add your Slack App credentials:
SLACK_CLIENT_ID=your_client_id
SLACK_CLIENT_SECRET=your_client_secret
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
REDIRECT_URI=http://localhost:3000/slack/oauth_redirect


## Set Up Slack App

Go to Slack API Dashboard.
Click Create New App > From scratch.
Name your app (e.g., MessagingApp) and select your workspace.
In OAuth & Permissions:
Add redirect URI: http://localhost:3000/slack/oauth_redirect.
Under Bot Token Scopes, add:chat:write
chat:write.public
channels:read
groups:read
im:read
mpim:read





## Start the Server
node server.js

You should see: 🚀 Server running on http://localhost:3000

Usage

Ensure the server is running (node server.js).
Update the CHANNEL_ID in routes/slack.js with your Slack channel ID:
In Slack, right-click a channel > More > Copy Channel ID.


Use Postman  to interact with the API endpoints.

## Testing with Postman / Thunder client

### Send a Message

Method: POST
URL: http://localhost:3000/slack/send
Body (JSON):{
  "text": "Hello from Tejas!"
}

![WhatsApp Image 2025-06-07 at 16 02 07_6f256009](https://github.com/user-attachments/assets/36e723a5-6132-47ec-9e80-5071ba822459)



### Schedule a Message

Method: POST
URL: http://localhost:3000/slack/schedule
Body (JSON):{
  "text": "Scheduled message from Tejas!",
  "post_at": 1717800000
}

![WhatsApp Image 2025-06-07 at 16 10 47_0590654a](https://github.com/user-attachments/assets/591f64e2-c61d-4fb9-b9dd-71166517cfe6)


### Edit a Message

Method: POST
URL: http://localhost:3000/slack/edit
Body (JSON):{
  "ts": "1717740000.000300",
  "text": "Updated Hello from Tejas!"
}


![WhatsApp Image 2025-06-07 at 16 14 01_a97ac686](https://github.com/user-attachments/assets/10bdabe9-48ee-40ad-b90c-abccc75cc5a2)



### Delete a Message

Method: POST
URL: http://localhost:3000/slack/delete
Body (JSON):{
  "ts": "1717740000.000300"
}

![WhatsApp Image 2025-06-07 at 16 15 18_c2917f51](https://github.com/user-attachments/assets/5cf8c3e8-428a-46d9-a261-f790e0186666)


