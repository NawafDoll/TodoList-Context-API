import React from "react";
import { TasksContext } from "./ContextTasks";
import { Button } from "@chakra-ui/react";

function AddTask({ handlerAddTask, disabled }: any) {
  return (
    <Button isDisabled={disabled} onClick={handlerAddTask} colorScheme={"blue"}>
      اضافة
    </Button>
  );
}

export default AddTask;
