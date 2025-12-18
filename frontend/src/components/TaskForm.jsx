// import { useState } from "react";
// import axios from "axios";

// const API = "http://localhost:5000/api/tasks";

// export default function TaskForm({ fetchTasks }) {
//     const [title, setTitle] = useState("");

//     const submit = async (e) => {
//         e.preventDefault();
//         if (!title.trim()) return;

//         await axios.post(API, { title });
//         setTitle("");
//         fetchTasks();
//     };

//     return (
//         <form onSubmit={submit} className="flex gap-2 mb-4">
//             <input
//                 className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Add a new task..."
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <button
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
//             >
//                 Add
//             </button>
//         </form>
//     );
// }

// import { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const API = "http://localhost:5000/api/tasks";

// export default function TaskForm({ fetchTasks }) {
//     const [title, setTitle] = useState("");

//     const submit = async (e) => {
//         e.preventDefault();
//         if (!title.trim()) return;

//         await axios.post(API, { title });
//         setTitle("");
//         fetchTasks();
//     };

//     return (
//         <form onSubmit={submit} className="flex gap-2 mb-4">
//             <input
//                 className="flex-1 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white border border-gray-600 placeholder-gray-400"
//                 placeholder="Add a new task..."
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-lg"
//             >
//                 Add
//             </motion.button>
//         </form>
//     );
// }


import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API = "http://localhost:5000/api/tasks";

export default function TaskForm({ fetchTasks }) {
    const [title, setTitle] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        await axios.post(API, { title });
        setTitle("");
        fetchTasks();
    };

    return (
        <form onSubmit={submit} className="flex gap-2 mb-6">
            <input
                className="flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white border border-gray-600 placeholder-gray-400 shadow-inner"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md"
            >
                Add
            </motion.button>
        </form>
    );
}
