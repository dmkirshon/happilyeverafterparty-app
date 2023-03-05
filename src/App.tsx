import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VoiceRecord } from "./components/VoiceRecord";

function App() {
  const router = createBrowserRouter([{ path: "/", element: <VoiceRecord /> }]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
