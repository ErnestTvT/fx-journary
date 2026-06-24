# FX Journal - Professional Trading Journal

A minimalist, professional Forex trading journal for tracking trades, performance, and emotions.

## Tech Stack

- **Frontend**: React + Tailwind CSS + TypeScript
- **Backend**: Node.js + Express
- **Database**: SQLite
- **Authentication**: Email & Password with JWT

## Features

✅ User Authentication
✅ Add/Edit/Delete Trades
✅ Trade History with Search
✅ Dashboard with Core Stats
✅ Win Rate Tracking
✅ RR (Risk:Reward) Analysis
✅ Emotion & Mistake Tracking
✅ Dark Theme (Professional Black)
✅ Fully Responsive

## Project Structure

```
fx-journal/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
├── server/                 # Node.js Backend
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── db/
│   │   └── index.js
│   └── package.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Design Principles

- **Minimalist**: Focus on essential features
- **Professional**: Clean, corporate aesthetic
- **Dark Theme**: Black background (#0F1115) with white text
- **Smooth**: Rounded cards (16px), soft shadows, smooth animations
- **Fast**: Quick trade logging and review
