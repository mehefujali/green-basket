import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
      {
            path:'/',
            element: <Main/> ,
            children:[
                  {
                        path: '/' ,
                        element: <Home/>
                  }
            ]
      }
])
export default Routes;