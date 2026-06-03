# EngineeringMentor AI

EngineeringMentor AI is a full-stack web application designed to help Computer Science and Engineering students prepare for internships and entry-level engineering roles.

The platform provides personalized career guidance through resume analysis, learning roadmaps, interview preparation, progress tracking, and AI-powered recommendations.

## Current Features

### Authentication

* Email/password authentication
* Google sign-in
* Secure session management
* Protected routes

### User Profiles

* Automatic profile creation after signup
* Target role selection
* Persistent profile storage

### Dashboard

* Personalized greeting
* Target role display
* Progress tracking foundation
* Interactive dashboard components
* Responsive sidebar navigation

### Settings

* Update target engineering role
* Profile management

### Database

* PostgreSQL database hosted on Neon
* Prisma ORM integration
* Persistent user profile storage

---

## Planned Features

### Resume Analysis

* PDF resume upload
* AI-powered resume review
* Resume scoring
* Skill gap detection

### Personalized Roadmaps

* Career-specific learning plans
* Weekly action plans
* Progress tracking

### Interview Preparation

* Behavioral interview practice
* Technical interview practice
* AI-generated feedback

### GitHub Repository Review

* Repository analysis
* Project recommendations
* Resume impact evaluation

### Future Features

* LeetCode tutoring
* Internship application tracker
* AI career coaching agent

---

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Authentication

* Clerk

### Database

* PostgreSQL (Neon)

### ORM

* Prisma

### Version Control

* Git
* GitHub

### Future Integrations

* OpenAI API
* Resume parsing tools

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/engineering-mentor-ai.git
```

Navigate into the project:

```bash
cd engineering-mentor-ai
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Project Structure

```text
app/
├── dashboard/
├── login/
├── roadmap/
├── resume/
├── settings/
├── signup/

components/
├── dashboard/
├── settings/
├── ui/

lib/
├── prisma.ts
├── profile.ts

prisma/
├── schema.prisma
```

---

## Development Status

### Completed

* Landing page
* Authentication system
* Protected routes
* Database setup
* Profile creation
* Settings page
* Dashboard foundation

### In Progress

* Resume upload system

### Planned

* AI resume analysis
* Roadmap generation
* Interview preparation
* GitHub project review

---

## Author

Developed by Guillermo Novillo

University of Florida
Computer Science Student

Summer 2026 – Present
