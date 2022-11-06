import UsersPage from "./pages/users/UsersPage";
import './App.css';
import 'antd/dist/antd.css';
import IndexPage from "./pages/index/IndexPage";
import MoviePage from "./pages/movies/MoviePage";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AppProvider from "./context/AppContext";
import MovieInfo from "./pages/movieInfo/MovieInfo";
import UserInfo from "./pages/userInfo/UserInfo";
import Navbar from "./components/navbar/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "",
                element: <IndexPage />,
            },
            {
                path: "users",
                element: <UsersPage />,

            },
            {
                path: "users/:id",
                element: <UserInfo />,

            },
            {
                path: "movies",
                element: <MoviePage />,
            },
            {
                path: "movies/:id",
                element: <MovieInfo />,
            },

        ],
    },
]);

function App() {
  return (
    <div className="App">
        <AppProvider>
          <RouterProvider router={router}/>
        </AppProvider>
    </div>
  );
}

export default App;
