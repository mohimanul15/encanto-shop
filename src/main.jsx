import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from './layout/Default/Default'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product'
import FAQ from './pages/FAQ/FAQ'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/faq",
        element: <FAQ />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
