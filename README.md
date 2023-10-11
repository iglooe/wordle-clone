# Birdle (wordle-clone)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

> **Warning**
> I personally use [pnpm](https://pnpm.io/) as my default package manager.
>
> However, you still have the option to use either npm or yarn if you prefer.

First, clone the repository:

```bash
git clone https://github.com/iglooe/wordle-clone.git
```

Then, install dependencies:

```bash
pnpm install
```

## JSON Server setup

The frontend relies on a JSON server to pull words from. To run the server do the following:

```bash
json-server ./data/db.json --port 3001
```

Finally, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
