import { Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TasksContext } from "./ContextTasks";
import TasksLayout from "./TasksLayout";
function ButtonsTasks() {
  const nav = useNavigate();
  const { tasks, setTasks } = TasksContext();
  const [change, setChange] = useState("all");
  const showAllTasks = () => {
    setTasks(tasks);
    setChange("all");
  };

  const taskscomplete: any = tasks.filter((e: any) => e.isComplete === true);
  const showTasksCompleted = () => {
    setChange("completed");
  };
  const notCompleted = tasks.filter((e: any) => !e.isComplete);
  const showTasksNotCompleted = () => {
    setChange("notCompleted");
  };
  return (
    <>
      <HStack justifyContent={"center"} flexDirection={"row-reverse"}>
        <Button
          onClick={showAllTasks}
          backgroundColor={change === "all" ? "gray" : ""}
          color={change === "all" ? "white" : ""}
          _hover={{ bg: "gray" }}
        >
          الكل
        </Button>
        <Button
          onClick={showTasksCompleted}
          backgroundColor={change === "completed" ? "gray" : ""}
          color={change === "completed" ? "white" : ""}
          _hover={{ bg: "gray" }}
        >
          منجز
        </Button>
        <Button
          onClick={showTasksNotCompleted}
          backgroundColor={change === "notCompleted" ? "gray" : ""}
          color={change === "notCompleted" ? "white" : ""}
          _hover={{ bg: "gray" }}
        >
          غير منجز
        </Button>
      </HStack>
      <div>
        {/* <Outlet /> */}

        {/* <TasksLayout tasks={tasks} setTasks={setTasks} /> */}
        {change === "all" && <TasksLayout tasks={tasks} />}
        {change === "completed" && <TasksLayout tasks={taskscomplete} />}
        {change === "notCompleted" && <TasksLayout tasks={notCompleted} />}
      </div>
    </>
  );
}

export default ButtonsTasks;
