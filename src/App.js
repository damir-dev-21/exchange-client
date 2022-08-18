import './App.css';
import NavBar from './components/Nav';
import { useDispatch, useSelector } from 'react-redux'
import { getBanks } from './redux/actions/banks';
import React, { useEffect, useState } from 'react';
import MainContent from './components/MainContent';

function App() {
  const banks = useSelector((state) => state.banks.initialBanks)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBanks())
  }, [])

  console.log(banks);
  return (
    <div className="App">
      <header className="App-header">
        <h3>Курсы валют</h3>
      </header>
      <div className='wrapper'>
        <div className='main'>
          <div className='main__body'>
            <NavBar />
            <div className='main__body__content'>
              {
                <MainContent banks={banks} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

