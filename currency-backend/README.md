# ⚙️ Currency Converter – Backend

This is the **backend REST API** built with **NestJS**, responsible for:
- Fetching currencies
- Performing conversions
- Storing conversion history
- Securing API keys

---

## 🛠 Tech Stack

- NestJS
- TypeScript
- Axios
- FreeCurrencyAPI
- Swagger (local testing)

---

## 📂 Folder Structure

```bash
src/
├── currency/     # Currency conversion & list APIs
├── history/      # Conversion history module
├── app.module.ts
└── main.ts


🌐 Environment Variables

Create a .env file:

CURRENCY_API_KEY= add you api key 


⚠️ .env is ignored by git.
.env.example is committed for reference.



Run Locally

npm install
npm run start:dev


Backend will run on:

http://localhost:3000

Swagger (Local Only)
http://localhost:3000/swagger


Deployment

Hosted on Vercel

Chosen due to better support for REST APIs & CORS

Stable handling of POST & OPTIONS requests


🧠 Notes

API key is never exposed to frontend

CORS configured for frontend domain only

Clean modular architecture

👨‍💻 Author

Sher Muhammad
