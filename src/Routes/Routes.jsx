import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeCard/CollegeDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/colleges",
            element:<Colleges></Colleges>
        }
        ,
        {
          path: "college-details/:id",
          element:<CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`/public/Data/data.json/${params.id}`)
        }


      ]
    },
  ]);