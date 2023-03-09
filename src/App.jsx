import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import MainContent from './main-content'
import './Footer.scss'
import './index.scss'
import CurrencyContext from './CurrencyContext'
import Context from './Context'
import reducer from './reducer'

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(''); //empty ''means homepage
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');
  const [exRate, setExRate] = useState(1);
  const initialContextValue={
    user:null,
    theme: 'light',
    language: 'en',
    currency: 'USD',
    authHash: null,
    shoppingCart: []
  }
  const [contextValue, setContextValue] = useReducer(reducer,initialContextValue)

  return (
<Context.Provider value={{
  Context:contextValue,
  changecontext:setContextValue
}}>
    <CurrencyContext.Provider value={ {
      currency,//'EUR'
    setCurrency,//the means to change'EUR' to snother currency
    exRate,
    setExRate
    }}>
    <div className='app'>
      <Header
      
      page={page}
      setPage={setPage}
      />
   <MainContent 
       page = {page}
   />
      <Footer/>
      </div>
      </CurrencyContext.Provider>
      </Context.Provider>
   
  )
}

export default App
