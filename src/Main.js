import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { MainWrapper } from './MainWrapper';


export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <MainWrapper />
        </Provider>
      </React.Fragment>
    )
  }
}
