import React from "react";
import { CheckIcon } from "@chakra-ui/icons";
function CheckTasks({ handler, bg, color }: any) {
  return (
    <CheckIcon
      color={color}
      cursor={"pointer"}
      onClick={handler}
      border={"1px solid green"}
      borderRadius={"50%"}
      bg={bg}
      padding={"5px"}
      fontWeight={"bold"}
      fontSize={"25px"}
    />
  );
}

export default CheckTasks;
