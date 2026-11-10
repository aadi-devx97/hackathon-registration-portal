
# MatruCare AI — Hackathon Registration Portal

A full-stack MERN application that allows participants to create accounts, verify their email addresses using OTP, log in securely, and register for a hackathon.

## Features

### Authentication
- User signup with input validation
- Secure password hashing using bcrypt
- Six-digit email OTP verification
- OTP expiration and resend functionality
- JWT-based authentication
- Protected routes

### Hackathon Registration
- Participant information and academic details
- College selection with a custom "Other" option
- Project details and submission links
- Dynamic team member fields
- Registration confirmation email
- Dashboard displaying registration details

### Additional Features
- Contact form with email delivery
- Responsive user interface
- Protected dashboard and registration pages
- Input validation on frontend and backend

## Tech Stack

**Frontend**
- React
- Vite
- Tailwind CSS
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Nodemailer
- Zod

## Project Structure

```text
hackathon-registration-portal/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── config/
│       ├── pages/
│       └── App.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── server.js
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Gmail account with Google App Password (for email delivery)

### 1. Clone the Repository

```bash
git clone https://github.com/aadi-devx97/hackathon-registration-portal.git

cd hackathon-registration-portal
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

FRONTEND_URL=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password

EMAIL_FROM_NAME=MatruCare AI
EMAIL_FROM_ADDRESS=your_email@gmail.com
```

Start the backend:

```bash
npm run dev
```

The backend runs at `http://localhost:5000`.

### 3. Configure the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend runs at `http://localhost:5173`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Create an account |
| POST | `/api/auth/verify-otp` | Verify email OTP |
| POST | `/api/auth/resend-otp` | Resend verification OTP |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/user/me` | Get current user |
| POST | `/api/hackathon/register` | Submit hackathon registration |
| GET | `/api/hackathon/my-entry` | Get participant registration |
| POST | `/api/contact` | Submit contact message |
| GET | `/api/health` | Check backend status |

## Security

- Passwords are hashed before database storage.
- OTPs are hashed and expire after 10 minutes.
- JWT authentication protects private routes.
- Backend validation is implemented using Zod.
- Authentication and OTP endpoints use rate limiting.
- Sensitive environment variables are stored outside source control.

## Environment Variables

Never commit `.env` files, database credentials, JWT secrets, or Gmail App Passwords.

Use `.env.example` as a reference when configuring the project.

## Project Status

Developed as a full-stack hackathon registration portal using the MERN stack.

---

**GitHub Repository:**  
https://github.com/aadi-devx97/hackathon-registration-portal
