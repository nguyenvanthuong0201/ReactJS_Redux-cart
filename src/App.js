import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import Message from './components/Message'
import Cart from './components/Cart'

export default class App extends Component {
  render() {
    return (
      <div>
          <div>
        <header>
           <Header/>
        </header>
        <main id="mainContainer" >
            <div className="container">
              <Products/>
              <Message/>
               <Cart/>
            </div>
        </main>
        <footer className="page-footer center-on-small-only">
          <Footer/>
        </footer>
    </div>
      </div>
    )
  }
}
