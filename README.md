# DevCanvas

A polished frontend engineering journal built with Next.js. DevCanvas presents practical notes on Next.js, React, JavaScript, CSS, UI/UX, and accessibility through a responsive reading experience with custom article visuals.

## Features

- Topic-based article discovery and filtering
- Search by article title, summary, or author
- Responsive article cards with custom visual headers
- Dedicated article pages with two-column desktop heroes
- Mobile and tablet article layouts
- Light and dark themes
- Dynamically calculated publication statistics
- Static generation for article routes
- Demo authentication and comment-moderation views
- Keyboard-visible focus states and accessibility-conscious UI details

## Tech Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS 4
- JavaScript
- CSS
- ESLint

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage, featured article, search, and topic filters |
| `/about` | Project overview |
| `/articles/[slug]` | Statically generated article pages |
| `/login` | Demo sign-in page |
| `/comments` | Demo moderation dashboard |
| `/logout` | Demo sign-out flow |

## Article Topics

- Next.js
- React
- JavaScript
- CSS
- UI/UX
- Accessibility

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

```bash
git clone https://github.com/NeerajSaini271/devcanvas-frontend-journal.git
cd devcanvas-frontend-journal
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Validation

Run the code-quality check:

```bash
npm run lint
```

Create an optimized production build:

```bash
npm run build
```

The project has been validated with ESLint and a successful Next.js production build, including static generation of all article routes.

## Project Structure

```text
app/
  (admin)/                 Demo authentication and moderation routes
  about/                   About page
  articles/[slug]/         Statically generated article pages
  globals.css              Global styling and responsive design
  layout.js                Root application layout
  page.js                  Homepage
components/
  admin/                    Demo session and moderation components
  articles/                 Article cards, filtering, content, and visuals
  layout/                   Navigation and footer
  theme/                    Theme provider and toggle
  ui/                       Shared interface components
data/
  articles.js              Article metadata and content
public/
  article-icons/           Article SVG artwork and icon source note
```

## Article Visuals

Each article uses a topic-specific SVG visual stored locally in `public/article-icons`. Brand icon source and trademark notes are documented in `public/article-icons/SOURCES.md`. The application has no runtime dependency on an external image service for these visuals.

## Deployment

The project is ready for deployment on Vercel:

1. Import the GitHub repository into Vercel.
2. Keep the detected framework preset as Next.js.
3. Use the default build command, `npm run build`.
4. Deploy the project.

No environment variables are required for the current demo implementation.

## Repository

[github.com/NeerajSaini271/devcanvas-frontend-journal](https://github.com/NeerajSaini271/devcanvas-frontend-journal)

## Author

**Neeraj Kumar Saini**  
MERN Stack Developer
