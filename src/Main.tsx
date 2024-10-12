import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/App.css';
import './styles/website_home.css'
import './styles/ssomar-plugins-tools.css'
import { Home } from './pages/Home';
import { SsomarPluginsTools } from './pages/ssomar-plugins-tools/SsomarPluginsTools'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Error404_Page } from './pages/Error404_Page';
import { SCore_Editor } from './pages/ssomar-plugins-tools/SCore_Editor';
import MyComponent from './Test';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <Error404_Page />
},
{
  path: '/ssomar-tools',
  element: <SsomarPluginsTools />
},
{
  path: '/ssomar-tools/score',
  element: <SCore_Editor />
},
{
  path: '/test',
  element: <MyComponent />
}

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
