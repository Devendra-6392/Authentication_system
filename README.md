# Authentication System

A complete authentication system built with NestJS backend and React frontend.

## Features

### Backend (NestJS)
- JWT-based authentication
- User registration and login
- Protected routes
- In-memory PostgreSQL database using pg-mem
- Swagger API documentation
- Input validation with DTOs
- Password hashing with bcrypt

### Frontend (React + TypeScript)
- Modern React with TypeScript
- React Router for navigation
- React Query for API state management
- TailwindCSS for styling
- Protected routes
- Registration modal
- Toast notifications
- Responsive design

## Prerequisites

- Node.js (v16 or higher)
- npm

## Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd authentication
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm run setup
   \`\`\`

3. **Start the development servers**
   \`\`\`bash
   npm run dev
   \`\`\`

   This will start:
   - Backend server on http://localhost:3001
   - Frontend server on http://localhost:3000
   - Swagger documentation on http://localhost:3001/api

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user profile (protected)

## Project Structure

\`\`\`
auth-system/
├── backend/                 # NestJS backend
│   ├── src/
│   │   ├── auth/           # Authentication module
│   │   ├── user/           # User module
│   │   ├── database/       # Database configuration
│   │   └── main.ts         # Application entry point
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── main.tsx        # Application entry point
│   └── package.json
└── package.json           # Root package.json
\`\`\`

## Usage

1. **Registration**: Click "Sign up" on the login page to open the registration modal
2. **Login**: Enter your credentials to access the protected home page
3. **Home Page**: View your user profile and access quick actions
4. **Logout**: Click the logout button to end your session

## Security Features

- JWT tokens for authentication
- Password hashing with bcrypt
- Protected routes on both frontend and backend
- Input validation and sanitization
- CORS configuration

## Development

### Backend Development
\`\`\`bash
cd backend
npm run start:dev
\`\`\`

### Frontend Development
\`\`\`bash
cd frontend
npm run dev
\`\`\`

### API Documentation
Visit http://localhost:3001/api to view the Swagger documentation.

## Technologies Used

### Backend
- NestJS
- TypeORM
- PostgreSQL (in-memory with pg-mem)
- JWT
- Swagger
- bcryptjs
- class-validator

### Frontend
- React 18
- TypeScript
- React Router
- React Query
- TailwindCSS
- React Hook Form
- Axios

## License

MIT License
