import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
interface tasks {
  id: string;
  task: string;
  isComplete: boolean;
}
export const tasksCreateContext = createContext<any>(null);

const TasksProvider = ({ children }: any) => {
  let [tasks, setTasks] = useState<any>([]);
  const [completed, setCompleted] = useState(false);
  const [dataTask, setDataTask] = useState<tasks>({
    id: uuid(),
    task: "",
    isComplete: false,
  });

  useEffect(() => {
    try {
      const getTasks = JSON.parse(localStorage.getItem("tasks") || "");
      setTasks(getTasks);
    } catch {}
  }, []);

  const handlerIsComplete = (id: any) => {
    setCompleted(!completed);
    const updateList = tasks.map((e: any) =>
      e.id === id ? { ...e, isComplete: !e.isComplete } : e
    );
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };

  const handlerDelete = (id: any) => {
    const updateList = tasks.filter((e: any) => e.id !== id);
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };

  const handlerEditTask = (id: any, task: any) => {
    const updateList = tasks.map((e: any) =>
      e.id === id ? { ...e, task: task } : e
    );
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };
  return (
    <tasksCreateContext.Provider
      value={{
        dataTask,
        setDataTask,
        tasks,
        setTasks,
        handlerIsComplete,
        handlerDelete,
        handlerEditTask,
      }}
    >
      {children}
    </tasksCreateContext.Provider>
  );
};

export const TasksContext = () => {
  return useContext(tasksCreateContext);
};

export default TasksProvider;
