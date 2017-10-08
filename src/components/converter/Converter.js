import React, { Component } from 'react';
import './Converter.css';

class Converter extends Component {
    constructor(props) {
        super(props);
        this.handleMoneyChange = this.handleMoneyChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    }

    handleMoneyChange(event) {
        const money = event.target.value;
        if (money && this.props.onMoneyChange) {
            this.props.onMoneyChange(money);
        }
    }

    handleCurrencyChange(event) {
        const currency = event.target.value;
        if (currency) {
            this.props.onCurrencyChange(currency);
        }
    }

    render() {
        return (
            <div className="slds-form-element">
                <label
                    htmlFor="money"
                    className="slds-form-element__label">
                    {this.props.labelText}
                </label>
                <br />
                <input
                    type="number"
                    name="money"
                    aria-label={this.props.labelText}
                    step="0.01"
                    className="slds-input"
                    placeholder="0.00"
                    value={this.props.money}
                    onChange={this.handleMoneyChange} />
                <select
                    value={this.props.currency}
                    onChange={this.handleCurrencyChange}
                    className="slds-select">
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>
            </div>
        );
    }
}

export default Converter;
