import axios from 'axios';

/**
 * Get the rates for two given currencies
 *
 * @param {String} fromCurrency
 * @param {String} toCurrency
 *
 * @returns {Promise}
 *
 * @example getRates('CAD', 'USD');
 */
async function getRates(fromCurrency, toCurrency) {
    try {
        const url = `https://api.fixer.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;
        const response = await axios.get(url);
        return response;
    } catch (error) {
        throw error;
    }
}


export default { getRates };
