import React, { Component } from 'react';
import Converter from '../converter/Converter';
import Modal from '../modal/Modal';
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
            }).catch((error) => {
                alert(`An error occurred when communicating with the API
                Details: ${error.message}`);
            });
        }
    }

    calculateToMoney(fromMoney, fromCurrencyChange, toCurrencyChange, changeValue) {
        money.tryToConvertCurrency(
            this.state.fromMoney,
            fromCurrencyChange ? changeValue : this.state.fromCurrency,
            toCurrencyChange ? changeValue : this.state.toCurrency,
        ).then((convertedValue) => {
            this.setState({
                toMoney: convertedValue,
            });
        }).catch((error) => {
            alert(`An error occurred when communicating with the API
                Details: ${error.message}`);
        });
    }

    handleFromCurrencyChange(changeValue) {
        if (this.state.fromMoney) {
            this.calculateToMoney(this.state.fromMoney, true, false, changeValue);
        }
        this.setState({
            fromCurrency: changeValue,
        });
    }

    handleToCurrencyChange(changeValue) {
        if (this.state.fromMoney) {
            this.calculateToMoney(this.state.fromMoney, false, true, changeValue);
        }
        this.setState({
            toCurrency: changeValue,
        });
    }

    render() {
        return (
            <div className="CurrencyConverter slds-border_top slds-border_left slds-border_bottom slds-border_right">
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
                <Modal
                    currentData={this.state} />
            </div>
        );
    }
}

export default CurrencyConverter;
