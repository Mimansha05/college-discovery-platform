# 🎓 College Discovery Platform

A modern full-stack web application that helps students discover colleges, compare institutions, and get personalized college recommendations based on their JEE Main rank.

Built using Next.js, TypeScript, Prisma ORM, PostgreSQL, and Tailwind CSS.

---

## 🚀 Live Demo

**Website:** https://college-discovery-platform-chi-three.vercel.app/

---

## 📂 GitHub Repository

**Repository:** https://github.com/Mimansha05/college-discovery-platform

---

## ✨ Features

### 🔍 College Discovery

* Browse colleges from the database
* Search colleges by name
* Filter colleges by location
* Filter colleges by rating

### 🏫 College Details

* View detailed information about each college
* Check ratings, fees, placements, and average packages
* Explore college-specific information on dedicated pages

### ⚖️ College Comparison

* Compare two colleges side-by-side
* Analyze differences in:

  * Fees
  * Ratings
  * Placement Percentage
  * Average Package

### 🎯 College Predictor

* Enter JEE Main rank
* Receive college recommendations based on eligibility criteria
* View matching colleges instantly

### 🔐 Authentication

* User Signup
* User Login
* Secure password hashing using bcrypt
* User data stored in PostgreSQL

### 📱 Responsive Design

* Mobile-friendly
* Tablet-friendly
* Desktop-friendly
* Modern and clean UI

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Lucide React Icons

### Backend

* Next.js API Routes
* Prisma ORM

### Database

* PostgreSQL
* Neon Database

### Deployment

* Vercel

---

## 📁 Project Structure

```text
college-discovery-platform
│
├── app
│   ├── api
│   ├── compare
│   ├── predictor
│   ├── login
│   ├── signup
│   └── college
│
├── components
│   ├── CollegeList
│   ├── CompareSelector
│   ├── PredictorForm
│   ├── SearchBar
│   └── Filters
│
├── prisma
│   ├── schema.prisma
│   └── seed.ts
│
├── lib
│   ├── prisma.ts
│   └── auth.ts
│
└── README.md
```

---

## 🗄️ Database

The application uses PostgreSQL hosted on Neon.

Main entities:

### User

* Name
* Email
* Password

### College

* Name
* Location
* Rating
* Fees
* Average Package
* Placement Percentage
* Description
* Minimum Rank
* Maximum Rank

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Mimansha05/college-discovery-platform.git
cd college-discovery-platform
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=your_database_url
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Push Schema

```bash
npx prisma db push
```

### Seed Database

```bash
npx tsx prisma/seed.ts
```

### Run Development Server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:3000
```

---

## 🌐 Deployment

The project is deployed on:

* Vercel (Hosting)
* Neon PostgreSQL (Database)

---

## 📸 Key Functionalities Demonstrated

* College Search and Filtering
* College Comparison
* College Predictor
* User Registration
* User Login
* Database Integration using Prisma
* Responsive User Interface

---

## 🎯 Future Improvements

* Saved Colleges Feature
* Advanced College Filtering
* Scholarship Information
* Admission Notifications
* User Dashboard
* Profile Management

---

## 👩‍💻 Author

**Mimansha Mishra**

Built as a Full Stack Development Internship Project using modern web technologies.
