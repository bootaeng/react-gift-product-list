<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import './index.css'

import { ThemeProvider, Global } from '@emotion/react'
import { theme } from './styles/theme'
import { globalReset } from './styles/reset'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Global styles={globalReset} />
        <Root />
      </ThemeProvider>
    </React.StrictMode>
  )
}
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
>>>>>>> 151bc1bbd724e0a783aa25f114eb68ec0b0511d8
