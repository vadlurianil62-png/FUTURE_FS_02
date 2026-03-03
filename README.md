# FUTURE_FS_02 – Client Lead Management System (Mini CRM)

## 📌 Project Information

This project was developed as part of the **Full Stack Web Development Internship (Track Code: FS)**.

It is a modern Client Lead Management System (Mini CRM) built using **React and Supabase** to securely manage and track leads generated from website contact forms.

The system includes authentication, lead tracking, status management, dashboard analytics, and a notes system.

---

## 🚀 Features Implemented

### 🔐 Admin Authentication
- Email & password login (Supabase Auth)
- Secure session handling (JWT-based)
- Protected dashboard routes
- Row-Level Security (RLS) enabled

---

### 📊 Dashboard Overview
- Total Leads counter
- Contacted Leads counter
- Converted Leads counter
- Clean summary cards UI

---

### 📋 Lead Management

Each lead contains:
- Name
- Email
- Phone (optional)
- Source (Website / Instagram / LinkedIn / Referral)
- Status (New / Contacted / Converted)
- Created Date

---

### 🎯 Status Management
- Update status via dropdown
- Color indicators:
  - 🔵 New
  - 🟠 Contacted
  - 🟢 Converted

---

### 📝 Notes System
- Add multiple notes per lead
- Timestamped notes
- Stored in relational table
- Secure per-user access

---

### 🔎 Search & Filter
- Search by name or email
- Filter by status
- Real-time UI updates

---

### 📱 Responsive Design
- Fully responsive (mobile & desktop)
- Professional business dashboard UI
- Clean and minimal design

---

## 🛠 Technologies Used

### Frontend
- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend / Database
- Supabase
- PostgreSQL
- Supabase Authentication
- Row-Level Security (RLS)
- SQL Migrations

---

## 🗂 Project Structure


src/
├── components/
├── pages/
├── hooks/
├── integrations/
├── lib/
└── App.tsx

supabase/
└── migrations/


---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/vadlurianil62-png/FUTURE_FS_02.git
cd FUTURE_FS_02
Install Dependencies
npm install
Create .env File
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_public_anon_key
Run Project
npm run dev
🌐 Live Deployment

👉 https://lead-crm-desk.lovable.app

🎯 What This Project Demonstrates

Full-stack architecture using Supabase

Secure authentication system

CRUD operations

Database design & relationships

Protected routes

Responsive UI development

Real-world business problem solving

👨‍💻 Author

Anil Vadluri
Track Code: FS
Task: FUTURE_FS_02
