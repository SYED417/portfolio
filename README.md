# Syed Sulaiman — Developer Portfolio

A personal portfolio website showcasing projects, skills, and experience.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — fast dev server and build tool
- **Tailwind CSS** + **shadcn/ui** — styling and components
- **Supabase** — authentication (email/password + Google OAuth) and file storage
- **React Router v6** — client-side routing

## Features

- Responsive design with dark navy and gold theme
- Google OAuth login
- Protected resume viewer (authenticated users only)
- Projects showcase
- Contact section

## Local Development

```sh
# 1. Clone the repository
git clone https://github.com/SYED417/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Create a .env file in the project root
cp .env.example .env
# Then fill in your Supabase credentials

# 4. Start the dev server
npm run dev
```

The app runs on `http://localhost:5173`.

## Environment Variables

Create a `.env` file with:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

## Deployment

Deployed on **Vercel**. Add the environment variables above in Vercel Dashboard → Settings → Environment Variables before deploying.

- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/340d8483-5512-458a-a6b0-17683e2e2761) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
