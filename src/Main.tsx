import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/App.css';
import './styles/website_home.css'
import './styles/ssomar-plugins-tools.css'
import './styles/reusable-styles.css'
import { Home } from './pages/Home';
import { SsomarPluginsTools } from './pages/ssomar-plugins-tools/SsomarPluginsTools'

import {HashRouter, Route, Routes} from 'react-router-dom'
import { Error404_Page } from './pages/Error404_Page';
import { SCore_Editor } from './pages/ssomar-plugins-tools/SCore_Editor';
import MyComponent from './test_env/TestArea';
import { TestHome } from './test_env/TestHome';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ssomar-tools" element={<SsomarPluginsTools />} />
      <Route path="/ssomar-tools/score" element={<SCore_Editor />} />
      <Route path="/test" element={<MyComponent />} />
      <Route path="/testhome" element={<TestHome />} />
      <Route path="*" element={<Error404_Page />} />
    </Routes>
  </HashRouter>
  </StrictMode>
)
