import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Countries from "./components/Countries/Countries";
import Home from "./components/Home/Home";
import Root from "./Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/countries",
          element: <Countries></Countries>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
