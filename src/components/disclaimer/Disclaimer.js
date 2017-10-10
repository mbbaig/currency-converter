import React, { Component } from 'react';
import ReactModal from 'react-modal';
import fixer from '../../utils/fixer';
import './Disclaimer.css';

/**
 * Disclaimer component displays the disclaimer information.
 *
 * @extends Component
 */
class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dateOfRates: '',
            toCurrencyRate: '',
        };
    }

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    getData = () => {
        fixer.getRates(
            this.props.currentData.fromCurrency,
            this.props.currentData.toCurrency,
        ).then((rates) => {
            this.setState({
                dateOfRates: rates.data.date,
                toCurrencyRate: rates.data.rates[this.props.currentData.toCurrency] || 1,
            });
        }).catch((error) => {
            alert(`An error occurred when communicating with the API
                Details: ${error.message}`);
        });
    }

    render() {
        return (
            <div className="slds-text-align_right">
                <button
                    className="slds-button"
                    onClick={this.handleClick}>
                    Disclaimer
                </button>
                <ReactModal
                    isOpen={this.state.isOpen}
                    onAfterOpen={this.getData}
                    contentLabel="Disclaimer Modal" >
                    <div className="slds-popover__header">
                        <div className="slds-text-heading_large">
                            Disclaimer
                        </div>
                    </div>
                    <div className="slds-popover__body slds-text-heading_medium">
                        The rates were retreived from the <a href="http://fixer.io/">Fixer.io</a> API at <br /><br />
                        <strong>Date: {this.state.dateOfRates}</strong><br /><br />
                        The currency from which you want the rate is<br /><br />
                        <strong>Base: {this.props.currentData.fromCurrency}</strong><br /><br />
                        The currency to which you want to convert is<br /><br />
                        <strong>Currency: {this.props.currentData.toCurrency}</strong><br /><br />
                        The rate as of the date above is<br /><br />
                        <strong>Rate: {this.state.toCurrencyRate}</strong>
                    </div>
                    <div className="slds-popover__footer slds-text-align_right">
                        <button
                            className="slds-button"
                            onClick={this.handleClick}>
                            Close Modal
                        </button>
                    </div>
                </ReactModal>
            </div>
        );
    }
}

export default Disclaimer;
