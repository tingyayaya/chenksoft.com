import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import store from '@/store/store'

//layout
import App from './App'

ReactDOM.render(
  <AppContainer>
    <Provider store={store} >
     <App/>
    </Provider>
  </AppContainer>,
  document.querySelector('#root')
)
