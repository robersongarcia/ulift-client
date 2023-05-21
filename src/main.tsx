import React from 'react'
import ReactDOM from 'react-dom/client'
import UliftApp from './UliftApp'
import { BrowserRouter } from 'react-router-dom'
// fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
        <UliftApp />
     </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
