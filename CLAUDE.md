# Overview.

This is a crypto/stock tracker app built with react native,expo,nodejs,mongodb

## Common Commands

### Backend
- Install dependencies: `cd backend && npm install`
- Run development server: `cd backend && npm run dev`

### Mobile
- Install dependencies: `cd mobile && npm install`
- Start Expo: `cd mobile && npm start`
- Run on Android: `cd mobile && npm run android`
- Run on iOS: `cd mobile && npm run ios`
- Run on Web: `cd mobile && npm run web`
- Lint: `cd mobile && npm run lint`

## Architecture

The project is split into a backend API and a mobile application.

### Backend (`/backend`)
- **Technology**: Node.js, Express, MongoDB (Mongoose).
- **Structure**:
    - `server.js`: Entry point of the application.
    - `controllers/`: Business logic and request handling.
    - `models/`: Mongoose schema definitions.
    - `routes/`: API endpoint definitions.

### Mobile (`/mobile`)
- **Technology**: React Native, Expo (v55), TypeScript.
- **Routing**: Uses Expo Router for file-based routing.
- **Note**: Expo v55 is used; refer to the versioned documentation at https://docs.expo.dev/versions/v55.0.0/ when implementing new features.
