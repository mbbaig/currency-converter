import { fx } from 'money';
import fixer from './fixer';

/**
 * Covert a given value from one currency to another
 *
 * @param {Number} valueToconvert
 * @param {String} fromCurrency
 * @param {String} toCurrency
 *
 * @returns {Promise}
 *
 * @example tryToConvertCurrency(10, 'CAD', 'USD');
 */
async function tryToConvertCurrency(valueToconvert, fromCurrency, toCurrency) {
    try {
        const apiData = await fixer.getRates(fromCurrency, toCurrency);
        let convertedValue = null;
        if (apiData.data) {
            fx.rates = apiData.data.rates;
            fx.base = apiData.data.base;
            convertedValue = fx(valueToconvert).from(fromCurrency).to(toCurrency);
        }
        return convertedValue.toFixed(2);
    } catch (error) {
        throw error;
    }
}

export default { tryToConvertCurrency };
