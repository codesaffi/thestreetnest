import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Orders from './pages/Orders.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/thestreetnest/",
    element: <App />,
    children: [
      {
        path: "/thestreetnest/",
        element: <Home />,
      },
      {
        path: "/thestreetnest/collection",
        element: <Collection />,
      },
      {
        path: "/thestreetnest/about",
        element: <About />,
      },
      {
        path: "/thestreetnest/contact",
        element: <Contact />,
      }, 
      {
        path: "/thestreetnest/product/:productId",
        element: <Product />,
      },
        {
          path: "/thestreetnest/cart",
          element: <Cart />,
        },
        {
          path: "/thestreetnest/login",
          element: <Login />,
        },
        {
          path: "/thestreetnest/place-order",
          element: <PlaceOrder />,
        },
        {
          path: "/thestreetnest/orders",
          element: <Orders />,
        },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
  {/* <App /> */}
  <RouterProvider router={router} />
  </ShopContextProvider>
  </BrowserRouter>,
)
