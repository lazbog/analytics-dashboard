# Analytics Dashboard

A modern analytics dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This project provides a clean and responsive interface for monitoring key performance indicators and business metrics.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 📊 Real-time KPI metrics display
- 📈 Analytics cards with trend indicators
- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Built with Next.js 14 App Router
- 🔧 TypeScript for type safety
- 🎯 Tailwind CSS for styling

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Lucide React** - Beautiful & consistent icons

## Project Structure

```
analytics-dashboard/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── analytics-card.tsx
├── lib/
│   └── utils.ts
├── public/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Components

### AnalyticsCard

A reusable component for displaying KPI metrics with trend indicators.

**Props:**
- `title`: Card title
- `value`: Metric value
- `change`: Percentage change
- `changeType`: 'increase' or 'decrease'
- `icon`: Icon type ('users', 'revenue', 'trending')

### UI Components

Based on shadcn/ui design system:
- `Button`: Customizable button with multiple variants
- `Card`: Flexible card container with header, content, and footer

## API Routes

### GET /api/ping

Health check endpoint that returns server status and timestamp.

**Response:**
```json
{
  "ok": true,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.