# 🎨 Currency Converter – Frontend

This is the **frontend** of the Currency Converter application, built using **React + TypeScript** with a **mobile-first design** approach.

---

## 🛠 Tech Stack

- React 18
- TypeScript
- Redux Toolkit
- Axios
- Bootstrap 5
- Vite

---

## 📂 Folder Structure (Simplified)

```bash
src/
├── app/              # Redux store & hooks
├── features/         # Currency feature (slice, components, API)
├── layouts/          # Mobile-first layout
├── pages/            # App pages
├── services/         # Axios & storage helpers
├── styles/           # Global & mobile CSS
├── utils/            # Helpers (date, format)
├── App.tsx
└── main.tsx


🌐 Environment Variables

Create a .env file:

VITE_API_BASE_URL= add you backend url 


⚠️ .env is ignored by git.
.env.example is committed for reference.

App will run at:

http://localhost:5173


API Flow

Frontend → Backend (NestJS)

Backend → FreeCurrencyAPI

Frontend never accesses external API directly

📱 UI Highlights

Fully responsive (mobile-first)

Dropdown-based currency selection

Loader on API calls

Clean, minimal UX

🚀 Deployment

Hosted on Vercel

Auto-deploys on push to main

👨‍💻 Author

Sher Muhammad