import { fx } from 'money';
import fixer from './fixer';

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
