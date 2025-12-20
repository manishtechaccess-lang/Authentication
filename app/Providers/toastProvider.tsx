import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,

          iconTheme: {
            primary: "green",
            secondary: "black",
          },
        },
        error: {
          duration: 3000,
          iconTheme: {
            primary: "red",
            secondary: "white",
          },
        },
        loading: {
          duration: Infinity,
        },
      }}
    />
  );
};

export default ToastProvider;
