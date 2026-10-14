# 🏠 Tiles Gallery

Tiles Gallery is a modern and responsive tile showcase website where users can explore different types of tiles, search for tiles, view detailed product information, and manage their profile.

## 🌐 Live Website

🔗 **Live Demo:** https://tiles-gallery-8-syedbijoy062-5995s-projects.vercel.app

## 📂 GitHub Repository

🔗 **GitHub:** [Tiles Gallery](https://github.com/syedbijoy062cst/tiles-gallery-8)

---

## ✨ Features

- 🏠 Modern and responsive homepage
- 🖼️ Premium tile collection
- 🔍 Search tiles by title
- 📋 View detailed tile information
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔐 Email & password authentication
- 🔵 Google authentication
- 👤 User profile page
- ✏️ Update user profile
- 🚪 Secure logout functionality
- 🧭 Active navigation links
- 📢 Promotional marquee section
- ⚡ Loading UI while fetching data
- ❌ Custom not-found page
- 🔔 Toast notifications
- 🌐 Dynamic tile details using route parameters

---

## 📦 NPM Packages Used

- `next`
- `react`
- `react-dom`
- `better-auth`
- `mongodb`
- `@heroui/react`
- `react-toastify`
- `react-icons`

## 🛠️ Technologies Used

### Frontend
- **Next.js**
- **React**
- **JavaScript**
- **Tailwind CSS**
- **DaisyUI**
- **HeroUI**

### Authentication
- **Better Auth**
- **Google OAuth**

### Database
- **MongoDB**

### Other Tools & Libraries
- **React Toastify**
- **React Icons**
- **Next/Image**
- **Next/Link**

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── all-tiles/
│   │   ├── [id]/
│   │   │   └── page.jsx
│   │   ├── loading.jsx
│   │   └── page.jsx
│   │
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.jsx
│   │   └── register/
│   │       └── page.jsx
│   │
│   ├── profile/
│   │   └── page.jsx
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js
│   │
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Banner.jsx
│   ├── Marquee.jsx
│   ├── FeaturedTiles.jsx
│   ├── TilesCard.jsx
│   ├── SearchTiles.jsx
│   └── UpdateUserModal.jsx
│
└── lib/
    ├── auth.js
    └── auth-client.js
