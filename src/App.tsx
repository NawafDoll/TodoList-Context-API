import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Tasks from "./pages/Tasks";
import TasksProvider from "./components/ContextTasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksLayout from "./components/TasksLayout";
import "./app.css";
export const App = () => (
  <TasksProvider>
    <ChakraProvider theme={theme}>
      <div
        style={{
          backgroundColor: "#00003d",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            {/* <Route path="/all" element={<TasksLayout />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  </TasksProvider>
);
