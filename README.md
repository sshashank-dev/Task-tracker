# Task Tracker Pro 🚀

A full‑stack **MERN Task Management Application** that helps users create, update, complete, and manage tasks efficiently with a modern UI and a robust backend.

---

## ✨ Features

* ➕ Add new tasks
* ✏️ Edit existing tasks
* ✅ Mark tasks as completed
* 🗑️ Delete tasks
* 📂 Separate **Pending** and **Completed** tasks
* 🌙 Dark mode UI
* 🎞️ Smooth animations using Framer Motion
* 🔄 Real‑time updates with MongoDB

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon (development)

---

## 📁 Project Structure

```bash
task-tracker/
│
├── frontend/        # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/         # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | /api/tasks              | Get all tasks          |
| POST   | /api/tasks              | Create a task          |
| PUT    | /api/tasks/:id          | Update task title      |
| PUT    | /api/tasks/complete/:id | Toggle task completion |
| DELETE | /api/tasks/:id          | Delete a task          |

---

## 🧪 Environment Variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/tasktracker
PORT=5000
```

⚠️ `.env` is ignored by Git for security.

---

## 🚀 Future Improvements

* 🔐 User authentication (JWT)
* 📱 Mobile‑friendly UI
* 🔍 Search & filter tasks
* 📊 Task analytics dashboard
* ☁️ Cloud deployment

---

## 👨‍💻 Author

**Shashank Sharma**
GitHub: [https://github.com/sshashank-dev](https://github.com/sshashank-dev)

---

## ⭐ Support

If you like this project, please ⭐ star the repository and share it!

---

Happy Coding! 🎉
