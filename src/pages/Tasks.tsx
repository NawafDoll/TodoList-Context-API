import {
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { TasksContext } from "../components/ContextTasks";
import AddTask from "../components/AddTask";
import ChangeDataTask from "../components/ChangeDataTask";
import ButtonsTasks from "../components/ButtonsTasks";
import { Outlet } from "react-router-dom";
function Tasks() {
  const { dataTask, setDataTask, tasks, setTasks } = TasksContext();
  const handlerChange = (e: any) => {
    setDataTask({
      ...dataTask,
      task: e.target.value,
      isComplete: false,
    });
  };
  const handlerAddTask = () => {
    setDataTask({ ...dataTask, id: dataTask.id + 1 });
    const updateList = [...tasks, dataTask];
    setTasks(updateList);
    localStorage.setItem("tasks", JSON.stringify(updateList));
  };
  return (
    <Stack
      bg={"whiteAlpha.800"}
      w={"70%"}
      maxH={"60vh"}
      overflowY={"auto"}
      overflowX={"hidden"}
      padding={"10px"}
    >
      <Heading textAlign={"center"}>مهامي</Heading>
      <Divider border={"1px solid black"} />
      <ButtonsTasks />
      <Outlet />
      <HStack>
        <AddTask
          handlerAddTask={handlerAddTask}
          disabled={dataTask.task.length === 0}
        />
        <ChangeDataTask handlerChange={handlerChange} />
      </HStack>
    </Stack>
  );
}

export default Tasks;
