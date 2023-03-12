import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import VoiceBox from "./routes/VoiceBox";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/voice-box", element: <VoiceBox /> },
  ]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        overflow: "clip",
      }}
    >
      <div className="background_top"></div>
      <RouterProvider router={router} />
      <div className="background_bottom"></div>
    </div>
  );
}

export default App;
