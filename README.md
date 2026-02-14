# 💬 Reach-Out - Real-Time Chat Application

A modern, full-stack real-time chat application built with **React** and **NestJS**. Connect with friends, send instant messages, manage friend requests, and enjoy seamless communication.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔄 **Real-Time Messaging** | Instant message delivery using Socket.io WebSockets |
| 👥 **Friend Management** | Send, accept, and decline friend requests |
| 🔐 **Secure Authentication** | JWT-based authentication with bcrypt password hashing |
| 📸 **Profile Management** | Upload profile pictures and customize your bio |
| 🚫 **User Blocking** | Block users to prevent unwanted communications |
| 📱 **Responsive Design** | Works seamlessly on desktop, tablet, and mobile |
| 🎨 **Modern UI** | Clean, dark-themed interface with professional design |
| 💾 **Persistent Storage** | PostgreSQL database for reliable data storage |

---

## � Screenshots

![Reach-Out Chat Application](./Reach_Out/client/public/reach-out.png)

*Reach-Out - Modern real-time chat interface with responsive design*

---

## �🛠 Tech Stack

### Frontend
- **React.js** — UI library with hooks and functional components
- **TypeScript** — Type-safe development
- **Redux Toolkit** — State management for auth and chat data
- **Tailwind CSS** — Utility-first CSS framework
- **React Router DOM** — Client-side routing
- **Socket.io-client** — Real-time WebSocket communication
- **Axios** — HTTP client for API requests
- **React Hook Form** — Form validation and management

### Backend
- **NestJS** — Progressive Node.js framework
- **TypeScript** — Type-safe server-side code
- **PostgreSQL** — Relational database
- **Sequelize ORM** — Object-relational mapping
- **Socket.io** — WebSocket server for real-time features
- **Passport.js & JWT** — Authentication strategy
- **bcryptjs** — Password hashing (10 salt rounds)

### Cloud Services
- **Cloudinary** — Cloud image storage and optimization

---

## 📋 Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **PostgreSQL** ≥ 12.x
- **Git**

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/reach-out.git
cd Reach_Out
```

### 2️⃣ Setup Database
```bash
createdb reach_out
```

### 3️⃣ Setup Backend

Navigate to the server directory:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
DB_PASSWORD=your_database_password
CLIENT_BASE_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_key
```

Start the development server:
```bash
npm run start:dev
```

The backend will run on `http://localhost:5000`

### 4️⃣ Setup Frontend

Navigate to the client directory:
```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_CLOUD_NAME=your_cloudinary_cloud_name
REACT_APP_UPLOAD_PRESET=your_cloudinary_upload_preset
```

Start the development server:
```bash
npm start
```

The application will open on `http://localhost:3000`

---

## 📁 Project Structure

```
Reach_Out/
├── client/                          # React frontend application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── buttons/             # Button components
│   │   │   ├── inputs/              # Form inputs
│   │   │   └── layout/              # Layout structure
│   │   ├── pages/                   # Page components
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Chat/
│   │   │   ├── Profile/
│   │   │   ├── AddFriend/
│   │   │   ├── Channel/
│   │   │   └── Create/
│   │   ├── services/                # API service functions
│   │   ├── redux/                   # Redux store & slices
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── utils/                   # Utility functions & types
│   │   ├── lib/                     # Library configurations
│   │   ├── index.tsx                # App entry point
│   │   └── App.tsx                  # Root component
│   └── package.json
│
└── server/                          # NestJS backend application
    ├── src/
    │   ├── auth/                    # Authentication module
    │   │   ├── auth.controller.ts
    │   │   ├── auth.service.ts
    │   │   ├── guards/
    │   │   └── strategies/
    │   ├── user/                    # User management module
    │   │   ├── user.controller.ts
    │   │   ├── user.service.ts
    │   │   ├── user.entity.ts
    │   │   └── dto/
    │   ├── channel/                 # Chat channel module
    │   │   ├── channel.controller.ts
    │   │   ├── channel.service.ts
    │   │   ├── channel.gateway.ts
    │   │   └── channel.entity.ts
    │   ├── message/                 # Message module
    │   │   ├── message.controller.ts
    │   │   ├── message.service.ts
    │   │   └── message.entity.ts
    │   ├── database/                # Database configuration
    │   └── main.ts                  # Application entry point
    └── package.json
```

---

## 📖 Quick Start Guide

### Register & Login
1. Navigate to the **Register** page
2. Enter your email, username, and password
3. Click **"Create Account"**
4. Login with your credentials

### Add Friends
1. Go to **"Add Friend"** section
2. Search for users by username or email
3. Send a friend request
4. Wait for acceptance or manage existing requests in your **Profile**

### Start Chatting
1. Select a friend from your friends list
2. Type your message and send
3. Messages appear instantly in real-time for both users

### Manage Your Profile
1. Click on your **Profile**
2. Upload a profile picture
3. Update your bio/description
4. Changes are saved automatically

---

## 🔑 Key Features Explained

### Real-Time Chat
Messages are delivered **instantly** using Socket.io WebSockets, providing a seamless chat experience with zero delay.

### Bidirectional Friendships
Friend requests create **mutual relationships**. Once accepted, both users can message each other directly.

### Friend Management
- **Send Request** — Initiate a connection with another user
- **Accept/Decline** — Manage incoming friend requests
- **Block Users** — Prevent specific users from contacting you

### Secure Image Uploads
Profile pictures are uploaded to **Cloudinary**, ensuring reliable cloud storage, optimization, and fast delivery.

### Security & Authentication
- Passwords hashed using **bcrypt** (10 salt rounds)
- **JWT tokens** expire after 3 days
- Authentication guards on protected endpoints

---

## 🔌 API Reference

### Authentication Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/auth/register` | Create a new account |
| `POST` | `/auth/login` | Login and receive JWT token |

### User Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/user/:id` | Get user profile |
| `PATCH` | `/user/:id` | Update user profile |
| `POST` | `/user/friend/add` | Add/remove friend |
| `POST` | `/user/request/send` | Send/accept friend request |

### Message Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/message` | Send a message |
| `GET` | `/message/:channelId` | Get channel messages |

### Channel Endpoints
| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/channel` | Get all channels |
| `POST` | `/channel` | Create a new channel |

---

## 🔄 WebSocket Events

### Client → Server Events
- `send_message` — Send a message to a channel
- `join_channel` — Join a chat channel
- `leave_channel` — Leave a chat channel
- `friend_request` — Send friend request notification
- `accept_request` — Accept friend request notification

### Server → Client Events
- `message_received` — Receive new message
- `friend_request_received` — Receive friend request
- `request_accepted` — Friend request accepted
- `user_online` — User came online
- `user_offline` — User went offline

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 👤 Author

**Jatin**

- GitHub: [@jatin](https://github.com/jatinpathania/)

---

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) — Progressive Node.js framework
- [React](https://react.dev/) — JavaScript library for building UIs
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Socket.io](https://socket.io/) — Real-time communication platform
- [Cloudinary](https://cloudinary.com/) — Cloud image platform

---

**Made with ❤️ · Happy chatting! 💬**
