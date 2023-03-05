import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VoiceRecord } from "./components/VoiceRecord";
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
