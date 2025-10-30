import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import BookSearch from "../pages/Books";
import BookDetails from "../components/BookDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
        { path: '/books', element: <BookSearch/> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
       { path: '/contact', element: <Contact /> },
     
       { path: '/about', element: <About /> },
       { path: '/book/:id', element: <BookDetails /> },
    ],
  },
  
]);

export default router;
