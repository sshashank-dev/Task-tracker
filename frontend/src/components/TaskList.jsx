// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TaskList({
//     tasks,
//     deleteTask,
//     toggleComplete,
//     editTask
// }) {
//     const [editId, setEditId] = useState(null);
//     const [editText, setEditText] = useState("");

//     return (
//         <AnimatePresence>
//             {tasks.length === 0 && (
//                 <p className="text-gray-400 text-sm text-center">
//                     No tasks here
//                 </p>
//             )}

//             <div className="space-y-2">
//                 {tasks.map(task => (
//                     <motion.div
//                         key={task._id}
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         transition={{ duration: 0.25 }}
//                         className={`flex items-center justify-between p-3 rounded-lg shadow border
//               ${task.completed ? "bg-green-50" : "bg-gray-50"}`}
//                     >
//                         {editId === task._id ? (
//                             <input
//                                 className="flex-1 mr-2 border rounded px-2 py-1"
//                                 value={editText}
//                                 onChange={(e) => setEditText(e.target.value)}
//                             />
//                         ) : (
//                             <span
//                                 className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""
//                                     }`}
//                             >
//                                 {task.title}
//                             </span>
//                         )}

//                         <div className="flex gap-2">
//                             {editId === task._id ? (
//                                 <button
//                                     className="text-green-600 font-medium"
//                                     onClick={() => {
//                                         editTask(task._id, editText);
//                                         setEditId(null);
//                                     }}
//                                 >
//                                     Save
//                                 </button>
//                             ) : (
//                                 <button
//                                     className="text-blue-600"
//                                     onClick={() => {
//                                         setEditId(task._id);
//                                         setEditText(task.title);
//                                     }}
//                                 >
//                                     Edit
//                                 </button>
//                             )}

//                             <button
//                                 className="text-purple-600"
//                                 onClick={() => toggleComplete(task._id)}
//                             >
//                                 ✓
//                             </button>

//                             <button
//                                 className="text-red-500"
//                                 onClick={() => deleteTask(task._id)}
//                             >
//                                 ✕
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </AnimatePresence>
//     );
// }


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
//     const [editId, setEditId] = useState(null);
//     const [editText, setEditText] = useState("");

//     return (
//         <AnimatePresence>
//             {tasks.length === 0 && (
//                 <p className="text-gray-400 text-sm text-center">No tasks here</p>
//             )}

//             <div className="space-y-2">
//                 {tasks.map(task => (
//                     <motion.div
//                         key={task._id}
//                         initial={{ opacity: 0, y: -10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, scale: 0.9 }}
//                         transition={{ duration: 0.25 }}
//                         className={`flex items-center justify-between p-3 rounded-lg shadow border
//               ${task.completed ? "bg-green-900 text-gray-300" : "bg-gray-700 text-gray-100"}`}
//                     >
//                         {editId === task._id ? (
//                             <input
//                                 className="flex-1 mr-2 rounded px-2 py-1 bg-gray-600 border border-gray-500 text-white"
//                                 value={editText}
//                                 onChange={(e) => setEditText(e.target.value)}
//                             />
//                         ) : (
//                             <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
//                                 {task.title}
//                             </span>
//                         )}

//                         <div className="flex gap-2">
//                             {editId === task._id ? (
//                                 <button
//                                     className="text-green-400 font-medium"
//                                     onClick={() => {
//                                         editTask(task._id, editText);
//                                         setEditId(null);
//                                     }}
//                                 >
//                                     Save
//                                 </button>
//                             ) : (
//                                 <button
//                                     className="text-blue-400"
//                                     onClick={() => {
//                                         setEditId(task._id);
//                                         setEditText(task.title);
//                                     }}
//                                 >
//                                     Edit
//                                 </button>
//                             )}

//                             <button className="text-purple-400" onClick={() => toggleComplete(task._id)}>
//                                 ✓
//                             </button>

//                             <button className="text-red-500" onClick={() => deleteTask(task._id)}>
//                                 ✕
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </AnimatePresence>
//     );
// }


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash, FaCheck, FaEdit } from "react-icons/fa";

export default function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    return (
        <AnimatePresence>
            {tasks.length === 0 && (
                <p className="text-gray-400 text-sm text-center">No tasks here</p>
            )}

            <div className="space-y-3">
                {tasks.map(task => (
                    //         <motion.div
                    //             key={task._id}
                    //             initial={{ opacity: 0, y: -10 }}
                    //             animate={{ opacity: 1, y: 0 }}
                    //             exit={{ opacity: 0, scale: 0.95 }}
                    //             transition={{ duration: 0.25 }}
                    //             className={`flex items-center justify-between p-4 rounded-xl shadow-lg border
                    //   ${task.completed ? "bg-green-900 text-gray-300" : "bg-gray-700 text-gray-100"}`}
                    //         >
                    <motion.div
                        key={task._id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.4)" }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-center justify-between p-4 rounded-xl border
    ${task.completed ? "bg-green-900 text-gray-500" : "bg-gray-700 text-gray-100"}`}
                    >

                        {/* Task Title or Edit Input */}
                        {editId === task._id ? (
                            <input
                                className="flex-1 mr-3 rounded px-3 py-2 bg-gray-600 border border-gray-500 text-white"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <span className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
                                {task.title}
                            </span>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 text-lg">
                            {/* Edit / Save */}
                            {editId === task._id ? (
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-green-400 hover:text-green-500"
                                    onClick={() => {
                                        editTask(task._id, editText);
                                        setEditId(null);
                                    }}
                                >
                                    <FaCheck />
                                </motion.button>
                            ) : (
                                <motion.button
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-blue-400 hover:text-blue-500"
                                    onClick={() => {
                                        setEditId(task._id);
                                        setEditText(task.title);
                                    }}
                                >
                                    <FaEdit />
                                </motion.button>
                            )}

                            {/* Toggle Complete */}
                            <motion.button
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => toggleComplete(task._id)}
                                className={`transition-colors duration-300 ${task.completed ? "text-green-400 hover:text-green-500" : "text-purple-400 hover:text-purple-500"
                                    }`}
                            >
                                <FaCheck />
                            </motion.button>

                            {/* Delete */}
                            <motion.button
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-red-500 hover:text-red-600"
                                onClick={() => deleteTask(task._id)}
                            >
                                <FaTrash />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
}
