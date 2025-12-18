// import { useEffect, useState } from "react";
// import axios from "axios";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";

// const API = "http://localhost:5000/api/tasks";

// export default function App() {
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async () => {
//     const res = await axios.get(API);
//     setTasks(res.data);
//   };

//   const deleteTask = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     fetchTasks();
//   };

//   const toggleComplete = async (id) => {
//     await axios.put(`${API}/complete/${id}`);
//     fetchTasks();
//   };

//   const editTask = async (id, title) => {
//     await axios.put(`${API}/${id}`, { title });
//     fetchTasks();
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const pending = tasks.filter(t => !t.completed);
//   const completed = tasks.filter(t => t.completed);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center p-6">
//       <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-6">

//         <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
//           Task Tracker 🚀
//         </h1>

//         <TaskForm fetchTasks={fetchTasks} />

//         <Section title="Pending Tasks">
//           <TaskList
//             tasks={pending}
//             deleteTask={deleteTask}
//             toggleComplete={toggleComplete}
//             editTask={editTask}
//           />
//         </Section>

//         {completed.length > 0 && (
//           <Section title="Completed Tasks ✅">
//             <TaskList
//               tasks={completed}
//               deleteTask={deleteTask}
//               toggleComplete={toggleComplete}
//               editTask={editTask}
//             />
//           </Section>
//         )}
//       </div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div className="mt-6">
//       <h2 className="text-lg font-semibold text-gray-700 mb-2">
//         {title}
//       </h2>
//       {children}
//     </div>
//   );
// }



// import { useEffect, useState } from "react";
// import axios from "axios";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
// import { motion } from "framer-motion";

// const API = "http://localhost:5000/api/tasks";

// export default function App() {
//   const [tasks, setTasks] = useState([]);

//   const fetchTasks = async () => {
//     const res = await axios.get(API);
//     setTasks(res.data);
//   };

//   const deleteTask = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     fetchTasks();
//   };

//   const toggleComplete = async (id) => {
//     await axios.put(`${API}/complete/${id}`);
//     fetchTasks();
//   };

//   const editTask = async (id, title) => {
//     await axios.put(`${API}/${id}`, { title });
//     fetchTasks();
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const pending = tasks.filter(t => !t.completed);
//   const completed = tasks.filter(t => t.completed);

//   return (
//     <div className="dark min-h-screen bg-gray-900 flex justify-center p-6">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-gray-800 w-full max-w-xl rounded-2xl shadow-2xl p-6"
//       >
//         <h1 className="text-3xl font-extrabold text-center text-blue-400 mb-6">
//           Dark Task Tracker 🌙
//         </h1>

//         <TaskForm fetchTasks={fetchTasks} />

//         <Section title="Pending Tasks">
//           <TaskList
//             tasks={pending}
//             deleteTask={deleteTask}
//             toggleComplete={toggleComplete}
//             editTask={editTask}
//           />
//         </Section>

//         {completed.length > 0 && (
//           <Section title="Completed Tasks ✅">
//             <TaskList
//               tasks={completed}
//               deleteTask={deleteTask}
//               toggleComplete={toggleComplete}
//               editTask={editTask}
//             />
//           </Section>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div className="mt-6">
//       <motion.h2
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.3 }}
//         className="text-lg font-semibold text-gray-300 mb-2"
//       >
//         {title}
//       </motion.h2>
//       {children}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { motion } from "framer-motion";

const API = "http://localhost:5000/api/tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (id) => {
    await axios.put(`${API}/complete/${id}`);
    fetchTasks();
  };

  const editTask = async (id, title) => {
    await axios.put(`${API}/${id}`, { title });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const pending = tasks.filter(t => !t.completed);
  const completed = tasks.filter(t => t.completed);

  return (
    <div className="dark min-h-screen bg-gray-900 flex justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-800 w-full max-w-xl rounded-3xl shadow-2xl p-6"
      >
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6 tracking-wide">
          Task Tracker Pro 🌙
        </h1>

        <TaskForm fetchTasks={fetchTasks} />

        <Section title="Pending Tasks" color="text-blue-400">
          <TaskList
            tasks={pending}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        </Section>

        {completed.length > 0 && (
          <Section title="Completed Tasks" color="text-green-400">
            <TaskList
              tasks={completed}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              editTask={editTask}
            />
          </Section>
        )}
      </motion.div>
    </div>
  );
}

function Section({ title, children, color }) {
  return (
    <div className="mt-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={`text-lg font-semibold mb-3 ${color}`}
      >
        {title}
      </motion.h2>
      {children}
    </div>
  );
}
