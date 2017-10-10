import React, { Component } from 'react';
import './Converter.css';

/**
 * Converter component contains the form elements.
 *
 * @extends Component
 */
class Converter extends Component {
    handleMoneyChange = (event) => {
        const money = event.target.value;
        if (this.props.onMoneyChange) {
            this.props.onMoneyChange(money);
        }
    }

    handleCurrencyChange = (event) => {
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
                    className="slds-input"
                    placeholder="0.00"
                    step="0.01"
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
