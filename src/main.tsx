import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.scss'
import App from './components/App/'
import store from './store'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
