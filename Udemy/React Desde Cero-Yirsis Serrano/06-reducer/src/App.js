import React from 'react'
import Header from './components/Header'
import ContactList from './components/ContactList'
import Footer from './components/Footer'
const App = () => {
  return (
    
    <div className="app-container">
      <Header />
      <div className="alert alert-info mt-3" role="alert">
        The entered data will only be visible to the user and available on the device being used.
      </div>
      <ContactList></ContactList>
      <Footer></Footer>
    
    </div>
  )
}

export default App
