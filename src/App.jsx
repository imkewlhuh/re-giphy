import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout';
import TrendingPage from './pages/trending';
import RandomPage from './pages/random';
import SearchPage from './pages/search';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "trending",
        element: <TrendingPage />
      },
      {
        path: "random",
        element: <RandomPage />
      },
      {
        path: "search",
        element: <SearchPage />
      }
    ]
  }
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
