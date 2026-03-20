# Syed Sulaiman — Developer Portfolio

A modern developer portfolio built to showcase my projects, technical skills, and experience in web development. The website highlights my work, technologies I use, and provides a way to connect professionally.

---

## Live Demo

🌐 https://syedsulaiman.vercel.app

---

## Tech Stack

**Frontend**

* React 18
* TypeScript
* Vite

**Styling**

* Tailwind CSS
* shadcn/ui

**Authentication & Backend Services**

* Supabase Authentication (Email/Password + Google OAuth)
* Supabase Storage

**Routing**

* React Router v6

---

## Key Features

* Modern responsive design
* Dark navy and gold theme
* Secure authentication with Google OAuth
* Protected resume viewer (accessible only to authenticated users)
* Project showcase section
* Contact section for professional networking

---

## Project Structure

```
portfolio/
│
├── src/
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── lib
│   └── styles
│
├── public
├── index.html
└── package.json
```

---

## Getting Started (Local Development)

Clone the repository and install dependencies.

```bash
git clone https://github.com/SYED417/portfolio.git
cd portfolio
npm install
```

Create a `.env` file in the project root and add:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

Start the development server:

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Deployment

The project is deployed using **Vercel**.

To deploy:

1. Push the repository to GitHub
2. Import the project in Vercel
3. Add the required environment variables
4. Deploy

---

## Author

**Syed Sulaiman**

Computer Science Student | Web Developer
Interested in building scalable applications and cloud-based solutions.

GitHub: https://github.com/SYED417
LinkedIn: https://linkedin.com/in/your-profile
