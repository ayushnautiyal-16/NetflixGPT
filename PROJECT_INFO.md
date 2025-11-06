# 🎬 Netflix GPT

A movie recommendation web application that uses ChatGPT API to suggest movies based on user preferences. Browse Netflix-style content with AI-powered recommendations.

---

## ✨ Features

### 🔐 **Authentication**

- Sign In / Sign Up with Firebase
- Form validation and error handling
- Secure user profile management
- Auto-redirect based on authentication status

### 🎥 **Browse**

- Beautiful header with navigation
- Movie trailer in background
- Movie title and description
- Movie suggestions list
- Dynamic content loading

### 🤖 **Netflix GPT**

- AI-powered search bar
- ChatGPT integration for movie recommendations
- Personalized movie suggestions
- Smart filtering and sorting

---

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS
- **Authentication:** Firebase
- **State Management:** Redux Toolkit
- **API:** TMDB (The Movie Database), ChatGPT
- **Routing:** React Router
- **Deployment:** Firebase Hosting

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase project setup
- TMDB API key
- ChatGPT API key

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` file with:

   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_key
   REACT_APP_CHATGPT_API_KEY=your_chatgpt_key
   ```

4. Start the application:
   ```bash
   npm start
   ```

---

## 📦 Key Implementation Details

- Redux store for user and movie state management
- Firebase authentication for secure login
- TMDB API integration for movie data
- ChatGPT API for intelligent recommendations
- Responsive design with TailwindCSS
- Video player integration for trailers

---

## 📝 License

This project is open source and available under the MIT License.
