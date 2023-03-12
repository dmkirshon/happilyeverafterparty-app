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
    <div className="App">
      <div className="background_top"></div>
      <RouterProvider router={router} />
      <div className="background_bottom"></div>
    </div>
  );
}

export default App;
