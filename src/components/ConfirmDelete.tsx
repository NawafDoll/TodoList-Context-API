import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import DeleteTask from "./DeleteTask";
import { TasksContext } from "./ContextTasks";

function ConfirmDelete({ id }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handlerDelete } = TasksContext();

  return (
    <>
      <DeleteTask handler={onOpen} />
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"right"} mt={"16px"}>
            هل انت متأكد من رغبتك في حذف المهمة؟
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem" textAlign={"right"}>
              لا يمكنك التراجع عن الحذف في حال اختيار زر الحذف
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              أغلاق
            </Button>
            <Button
              variant="ghost"
              backgroundColor={"red.500"}
              color="white"
              _hover={{ backgroundColor: "red.900" }}
              //   Sche
              onClick={() => handlerDelete(id)}
            >
              نعم قم بالحذف
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmDelete;
