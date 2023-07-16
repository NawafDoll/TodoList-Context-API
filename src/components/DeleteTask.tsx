import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
function DeleteTask({ handler }: any) {
  return <DeleteIcon cursor={"pointer"} color={"white"} onClick={handler} />;
}

export default DeleteTask;
