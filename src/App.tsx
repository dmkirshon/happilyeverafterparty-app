import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Faqs from "./routes/Faqs";
import Home from "./routes/Home";
import VoiceBox from "./routes/VoiceBox";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <ErrorPage /> },
    { path: "/voice-box", element: <VoiceBox /> },
    { path: "/faqs", element: <Faqs /> },
  ]);
  return (
    <div className="App">
      <div className="background_top"></div>
      <RouterProvider router={router} />
      <footer className="app_footer">
        <p>Designed by Devon</p>
        <p>Crafted by David</p>
      </footer>
      <div className="background_bottom"></div>
    </div>
  );
}

export default App;
