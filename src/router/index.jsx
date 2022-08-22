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
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/about",
        element: <About />
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