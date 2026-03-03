# FUTURE_FS_02 – Client Lead Management System (Mini CRM)

## Tracker Code : FS

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
