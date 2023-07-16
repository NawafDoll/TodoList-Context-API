import React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
function EditTask({ handler }: any) {
  return <RepeatIcon color={"white"} onClick={handler} cursor={"pointer"} />;
}

export default EditTask;
