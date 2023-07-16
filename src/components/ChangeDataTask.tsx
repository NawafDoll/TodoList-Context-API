import { Input } from "@chakra-ui/react";
import React from "react";

function ChangeDataTask({ handlerChange }: any) {
  return (
    <Input
      placeholder="أضافة مهمة جديدة"
      onChange={handlerChange}
      textAlign={"right"}
    />
  );
}

export default ChangeDataTask;
