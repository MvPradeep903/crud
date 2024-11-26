import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Price from "./Price";
import Aboutus from "./Aboutus";
import Courses from "./Courses";
import FrontEnd from "./FrontEnd";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";
import Students from "./Students";
import EditComponent from "./EditComponent";
import Employee from "./Employee";
import Table from "./Table";
import FormDetails from "./FormDetails";
import EditForm from "./EditForm";
import {Provider} from 'react-redux'
import store from "./Store/store";
import Counter from "./Store/Counter";
import Todolist from "./Store/Todolist";
import Product from "./Store/Product";
import Cart from "./Store/Cart";


 const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/price",
        element:<Price/>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/formdetails",
        element:<FormDetails/>,
        children:[
          {
            path:"/formdetails/registration",
            element:<Students/>
          },
          {
            path:"/formdetails/employee",
            element:<Employee/>
          }
        ]
      },
      {
        path:"/table",
        element:<Table/>
      },
      {
        path:"/registration/edit/:index",
        element:<EditComponent/>
      },
      {
        path:"/editform/:id",
        element:<EditForm/>
      },
      {
        path:"/counter",
        element:<Counter/>
      },
      {
        path:"/todolist",
        element:<Todolist/>
      },
      {
        path:"/product",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/courses",
        element:<Courses/>,
        children:[
          {
            path:"/courses/frontend",
            element:<FrontEnd/>
          }
        ]
      },
      {
        path:"/countries",
        element:<Countries/>,
        children:[
          {
            path:"/countries/countryDetails/:cname",
            element:<CountryDetails/>
          }
        ]
      },
      
    ]
  }
])


root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
