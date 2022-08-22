import Home from '@/pages/Home'
import About from '@/pages/About'
import Blogs from '@/pages/Blogs'
import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blogs",
        element: <Blogs />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes