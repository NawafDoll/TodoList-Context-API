import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import CheckTasks from "./CheckTasks";
import DeleteTask from "./DeleteTask";
import { TasksContext } from "./ContextTasks";
import ConfirmDelete from "./ConfirmDelete";
import ConfirmEdit from "./ConfirmEdit";

function TasksLayout({ tasks, setTasks, id }: any) {
  const { handlerIsComplete } = TasksContext();

  return (
    <div>
      {tasks.map((task: any) => {
        return (
          <HStack
            key={task.id}
            bg={"currentcolor"}
            borderRadius={"3xl"}
            mt={"5px"}
            padding={"15px"}
            flexDirection={"row-reverse"}
            justifyContent={"space-between"}
          >
            <Text color={"white"}>{task.task}</Text>
            <HStack justifyContent={"space-between"} w={"20%"}>
              <ConfirmDelete id={task.id} />

              <ConfirmEdit id={task.id} text={task.task} />
              <CheckTasks
                handler={() => handlerIsComplete(task.id)}
                bg={task.isComplete ? "green" : "white"}
                color={task.isComplete ? "white" : "green"}
              />
            </HStack>
          </HStack>
        );
      })}
    </div>
  );
}

export default TasksLayout;
