import React from 'react';
import './App.css';
import CurrencyConverter from '../currencyConverter/CurrencyConverter';

function App() {
    return (
        <div className="App">
            <CurrencyConverter />
            <CurrencyConverter />
            <CurrencyConverter />
        </div>
    );
}

export default App;
