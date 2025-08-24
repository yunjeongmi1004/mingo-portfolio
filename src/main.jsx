import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app'

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <App />
    </HashRouter>
)
