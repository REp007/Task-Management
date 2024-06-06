import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

import ContextComp from '@/context/ContextComp';


function App() {
  return (
    <>
      <ContextComp>
        <RouterProvider router={router} />
      </ContextComp>
    </>
  )
}

export default App;
