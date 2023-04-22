import React from 'react'
import ReactDOM from 'react-dom/client'
import UliftApp from './UliftApp'
import { BrowserRouter } from 'react-router-dom'
// fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UliftApp />
    </BrowserRouter>
  </React.StrictMode>
)
