import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import { TasksContext } from "./ContextTasks";

function ConfirmEdit({ id, text }: any) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskText, setTaskText] = useState("");
  const { handlerEditTask } = TasksContext();
  return (
    <>
      <RepeatIcon color={"white"} onClick={onOpen} cursor={"pointer"} />

      {/* <Button ml={4} >
        I'll receive focus on close
      </Button> */}

      <Modal
        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>تعديل المهمة</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder={text}
                onChange={(e) => setTaskText(e.target.value)}
                textAlign={"right"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>أغلاق</Button>
            <Box
              backgroundColor={"transparent"}
              onClick={onClose}
              w={"fit-content"}
              _hover={{ bg: "transparent" }}
            >
              <Button
                variant="ghost"
                color="white"
                bg={"blue.600"}
                mr={3}
                onClick={() => handlerEditTask(id, taskText)}
                _hover={{ bg: "blue.800" }}
              >
                تعديل
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmEdit;
