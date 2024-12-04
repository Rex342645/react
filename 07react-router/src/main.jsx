import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/contact.jsx/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitHubInfoLoader } from './components/Github/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:
//       [
//         {
//           path:'',
//           element:<Home/>

//         },
//         {
//       path:'about',
//       element:<About/>
//         },
//        {
//         path:'contact',
//         element:<Contact/>
//        }
//       ]
//   },

  
// ])
const router= createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>} >
    <Route path='' element={<Home/>}></Route>
    <Route path='about' element={<Contact/>}></Route>
    <Route path='contact' element={<About/>}></Route>
    <Route path='user/:userid' element={<User/>}></Route>
    <Route 
    loader={gitHubInfoLoader}
    path='github' element={<Github/>}></Route>
   </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />
  </StrictMode>,
)
