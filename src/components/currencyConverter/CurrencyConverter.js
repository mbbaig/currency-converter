import React, { Component } from 'react';
import Converter from '../converter/Converter';
import money from '../../utils/money';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromMoney: '',
            toMoney: '',
            fromCurrency: 'CAD',
            toCurrency: 'USD',
        };

        this.handleFromMoneyChange = this.handleFromMoneyChange.bind(this);
        this.handleFromCurrencyChange = this.handleFromCurrencyChange.bind(this);
        this.handleToCurrencyChange = this.handleToCurrencyChange.bind(this);
    }

    handleFromMoneyChange(changeValue) {
        if (changeValue) {
            money.tryToConvertCurrency(
                changeValue,
                this.state.fromCurrency,
                this.state.toCurrency,
            ).then((convertedValue) => {
                this.setState({
                    fromMoney: changeValue,
                    toMoney: convertedValue,
                });
            });
        }
    }

    handleFromCurrencyChange(changeValue) {
        if (changeValue) {
            money.tryToConvertCurrency(
                this.state.fromMoney,
                changeValue,
                this.state.toCurrency,
            ).then((convertedValue) => {
                this.setState({
                    toMoney: convertedValue,
                    fromCurrency: changeValue,
                });
            });
        }
    }

    handleToCurrencyChange(changeValue) {
        if (changeValue) {
            money.tryToConvertCurrency(
                this.state.fromMoney,
                this.state.fromCurrency,
                changeValue,
            ).then((convertedValue) => {
                this.setState({
                    toMoney: convertedValue,
                    toCurrency: changeValue,
                });
            });
        }
    }

    render() {
        return (
            <div className="CurrencyConverter">
                <header>
                    Currency Converter
                </header>
                <Converter
                    labelText="Type in amount and select currency:"
                    money={this.state.fromMoney}
                    currency={this.state.fromCurrency}
                    onMoneyChange={this.handleFromMoneyChange}
                    onCurrencyChange={this.handleFromCurrencyChange} />
                <Converter labelText="Converted amount:"
                    money={this.state.toMoney}
                    currency={this.state.toCurrency}
                    onCurrencyChange={this.handleToCurrencyChange} />
            </div>
        );
    }
}

export default CurrencyConverter;
