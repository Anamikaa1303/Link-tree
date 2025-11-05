# 🌿 BitLink – Your Modern Link in Bio Platform

> A modern, responsive **Linktree-inspired web app** built with **Next.js 14**, **Clerk Auth**, and **MongoDB**.  
> Create your personalized bio link, share your content, and grow your digital identity — all in one place.

![BitLink Preview](https://raw.githubusercontent.com/Anamikaa1303/Link-tree/main/public/Link.png)

---

## 🚀 Features

- 🌈 **Beautiful & Responsive UI** – Fully mobile-friendly with TailwindCSS  
- 🔗 **Custom Link Pages** – Create, edit, and manage your personal link trees  
- 🔒 **Authentication** – Powered by Clerk (Google & social logins)  
- 📊 **Analytics Dashboard** – Track clicks and engagement  
- 🧩 **Templates & Marketplace** – Choose from pre-made themes  
- ☁️ **MongoDB Integration** – Store user and link data seamlessly  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 14 (App Router)** | Frontend + Backend |
| **Tailwind CSS** | Styling and responsiveness |
| **MongoDB / Mongoose** | Database |
| **Clerk** | Authentication |
| **React Icons / Shadcn UI** | UI components & icons |
| **Vercel** | Deployment |

---

## ⚙️ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Anamikaa1303/Link-tree.git
cd Link-tree

2️⃣ Install Dependencies
npm install

3️⃣ Create .env.local file

Add your environment variables:

MONGODB_URI=mongodb://localhost:27017
NEXT_PUBLIC_HOST=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

4️⃣ Run the Development Server
npm run dev
