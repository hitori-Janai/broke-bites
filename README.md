This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## env

[cursor](https://www.cursor.com/downloads)(0.48.9) + [cursor-free-vip](https://github.com/yeongpin/cursor-free-vip)  + new email

> windows: `irm https://raw.githubusercontent.com/yeongpin/cursor-free-vip/main/scripts/install.ps1 | iex`

nodejs(v23.11.0)

## nextjs

```
npx create-next-app # name broke-bites

npm run dev
```

> permission denied 0.0.0.0:3000

## ai dev

> Generate the code for a single-page Next.js application that functions as a basic QR code generator.
>
> Requirements:
>
> - Use Next.js (App Router preferred, but Pages Router is okay).
> - The page should have a text input element.
> - Below the input, display a QR code.
> - The QR code should dynamically update in real-time (or near real-time) based on the text entered in the input field.
> - Use the `qrcode.react` library to render the QR code component.
> - Use React's `useState` hook to manage the input text.
> - Provide the code for the main page component (e.g., `app/page.tsx` or `pages/index.tsx`).
> - No complex styling is needed, focus on the core functionality.

## Commit github

## Connect [neon](neon.tech)

```
CREATE TABLE public.user_qrcode (
  id          SERIAL PRIMARY KEY,          -- Auto-increment primary key
  qrcode_txt  TEXT     NOT NULL,           -- Stores the QR code text content
  score       INTEGER  NOT NULL DEFAULT 0  -- Score, default value is 0
);
COMMENT ON TABLE public.user_qrcode IS 'Table storing user QR codes and their scores';
COMMENT ON COLUMN public.user_qrcode.id IS 'Auto-increment primary key';
COMMENT ON COLUMN public.user_qrcode.qrcode_txt IS 'Stores the QR code text content';
COMMENT ON COLUMN public.user_qrcode.score IS 'Score, default value is 0';
```

> postgresql://neondb_owner:npg_jR7efZiD3IMq@ep-polished-poetry-a44p3osy-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

## Like Button

> “Using Next.js API routes and React hooks, implement a 'Like' button next to the generated QR code:
>
> - The button is initially disabled and greyed out until the user enters text in the input field.
> - Once text is entered and a QR code is displayed, enable the button.
> - On click, send a POST request to '/api/like' with payload { qrcode_txt: '`<current text>`' }.
> - Receive a JSON response containing { id: number, score: number }.
> - Display the returned 'id' and 'score' above the button.
> - Each subsequent click should send the same 'id' to increment the 'score' and update the displayed count.
> - Change the button color to red when active.
> - Use React’s useState and useEffect to manage state and re-render.”

## Random Button

> “Add a 'Shake' button labeled 'Shake' below the input and QR code:
>
> - On click, send a GET request to '/api/random'.
> - Expect a JSON response { id: number, qrcode_txt: string, score: number }.
> - Populate the input field with 'qrcode_txt', regenerate the QR code, and display the 'score'.
> - Ensure the 'Like' button now references the returned 'id' for further incrementing.
> - Maintain existing state hooks; use async/await for fetch calls.
> - Style the 'Shake' button with a hover effect and cursor pointer.”

## [Vercel](vercel.com)

> DATABASE_URL=postgresql://neondb_owner:npg_jR7efZiD3IMq@ep-polished-poetry-a44p3osy-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
