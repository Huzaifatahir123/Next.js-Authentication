# Next.js Authentication System

A secure, production-ready, and stateless authentication system built with Next.js. This project implements modern web security standards, utilizing JSON Web Tokens (JWT) for session management, secure cookie storage, and protected API routing.



## 🚀 Live Demo
Check out the live application here:

---

## ✨ Features

- **Stateless Authentication:** Implemented using JSON Web Tokens (JWT) for scalability.
- **Secure Token Storage:** Access tokens and Refresh tokens are stored in `HttpOnly`, `Secure`, and `SameSite=Strict` cookies to mitigate XSS and CSRF attacks.
- **Silent Token Refresh:** Automatic background token rotation using a Refresh Token pattern before the Access Token expires.
- **Protected Routes & Middleware:** Next.js Edge Middleware intercepts unauthorized requests at the routing level for instantaneous redirects.
- **Responsive Auth UI:** Clean, accessible login, registration, and profile pages built with Tailwind CSS.
- **Form Validation:** Client and server-side input validation to ensure data integrity.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Database/Backend:** MongoDB

---

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have **Node.js (v18.0.0 or higher)** installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Huzaifatahir123/auth.git
   cd auth
  ** **npm run dev****
 
_**folder structure**_  
├── app/                # Next.js App Router (Pages, Layouts, and API Routes)
├── db_config/          # Database connection logic (e.g., MongoDB/Mongoose setup)
├── helpers/            # Utility functions (JWT signing, password hashing, mailer)
├── models/             # Database schemas (e.g., User, Token, Profile)
├── public/             # Static assets (images, icons, fonts)
├── .env                # Environment variables (DO NOT COMMIT THIS)
├── middleware.ts       # Edge middleware for route protection (if used)
├── next.config.ts      # Next.js configuration settings
└── tsconfig.json       # TypeScript configuration
