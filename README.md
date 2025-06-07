# 🚀 Slack Messaging App

A Node.js application that integrates with the Slack API, enabling you to:
- Authenticate using Slack OAuth
- Send and schedule messages
- Retrieve message history
- Edit and delete messages

> 🧪 Tested using the Slack Developer Sandbox and Postman.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Slack App Configuration](#slack-app-configuration)
- [Start the Server](#start-the-server)
- [Usage](#usage)
- [API Testing (Postman)](#api-testing-postman)
  - [Send a Message](#send-a-message)
  - [Schedule a Message](#schedule-a-message)
  - [Edit a Message](#edit-a-message)
  - [Delete a Message](#delete-a-message)
- [License](#license)

---

## 📖 Project Overview

This project is a RESTful API built with **Node.js** and **Express**, leveraging the **Slack API** to interact with messages in a Slack channel.

---

## 🔧 Prerequisites

Make sure you have the following installed:

- Node.js (v16 or above)
- npm (v8 or above)
- A Slack Workspace (with Developer Sandbox)
- A registered Slack App with necessary credentials
- Postman or Thunder Client (for API testing)

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/slack-messaging-app.git
   cd slack-messaging-app
   ```

2. **Install Dependencies**
   ```bash
   npm install express axios dotenv body-parser
   ```

3. **Create `.env` File**
   Add the following to your `.env` file:
   ```env
   SLACK_CLIENT_ID=your_client_id
   SLACK_CLIENT_SECRET=your_client_secret
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_SIGNING_SECRET=your-signing-secret
   REDIRECT_URI=http://localhost:3000/slack/oauth_redirect
   ```

---

## 🛠️ Slack App Configuration

1. Go to [Slack API Dashboard](https://api.slack.com/apps)
2. Click **Create New App** → **From scratch**
3. Set a name (e.g., `MessagingApp`) and select your workspace
4. Under **OAuth & Permissions**:
   - Add Redirect URI: `http://localhost:3000/slack/oauth_redirect`
   - Add the following Bot Token Scopes:
     - `chat:write`
     - `chat:write.public`
     - `channels:read`
     - `groups:read`
     - `im:read`
     - `mpim:read`

---

## ▶️ Start the Server

```bash
node server.js
```

Server should now be running at:  
**http://localhost:3000**

---

## 🧪 Usage

Ensure your server is up and running.  
Update your `CHANNEL_ID` in `routes/slack.js` with your Slack Channel ID.  
You can get it by right-clicking the channel in Slack → **More** → **Copy Channel ID**

---

## 📬 API Testing (Postman)

### ✅ Send a Message

- **Method:** POST  
- **URL:** `http://localhost:3000/slack/send`  
- **Body (JSON):**
  ```json
  {
    "text": "Hello from Tejas!"
  }
  ```

![Send Message](https://github.com/user-attachments/assets/36e723a5-6132-47ec-9e80-5071ba822459)

---

### ⏰ Schedule a Message

- **Method:** POST  
- **URL:** `http://localhost:3000/slack/schedule`  
- **Body (JSON):**
  ```json
  {
    "text": "Scheduled message from Tejas!",
    "post_at": 1717800000
  }
  ```

![Schedule Message](https://github.com/user-attachments/assets/591f64e2-c61d-4fb9-b9dd-71166517cfe6)

---

### ✏️ Edit a Message

- **Method:** POST  
- **URL:** `http://localhost:3000/slack/edit`  
- **Body (JSON):**
  ```json
  {
    "ts": "1717740000.000300",
    "text": "Updated Hello from Tejas!"
  }
  ```

![Edit Message](https://github.com/user-attachments/assets/10bdabe9-48ee-40ad-b90c-abccc75cc5a2)

---

### 🗑️ Delete a Message

- **Method:** POST  
- **URL:** `http://localhost:3000/slack/delete`  
- **Body (JSON):**
  ```json
  {
    "ts": "1717740000.000300"
  }
  ```

![Delete Message](https://github.com/user-attachments/assets/5cf8c3e8-428a-46d9-a261-f790e0186666)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ by **Tejas Ambadas Khope**
