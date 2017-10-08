import axios from 'axios';

async function getRates(fromCurrency, toCurrency) {
    try {
        const url = `http://api.fixer.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}


export default { getRates };
