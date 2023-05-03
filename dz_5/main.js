const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const fetchData = async () => {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const convert = (element, target, target2) => {
    element.oninput = async () => {
        const response = await fetchData();
        if (element === som) {
            target.value = (element.value / response.usd).toFixed(2);
            target2.value = (element.value / response.eur).toFixed(2);
        } else if (element === usd) {
            target.value = (element.value * response.usd).toFixed(2);
            target2.value = (element.value * response.usd / response.eur).toFixed(2);
        } else if (element === eur) {
            target.value = (element.value / response.eur).toFixed(2);
            target2.value = (element.value * response.eur / response.usd).toFixed(2);
        }

        element.value === '' && (target.value = '');
        element.value === '' && (target2.value = '');
    };
};

convert(som, usd, eur);
convert(usd, som, eur);
convert(eur, usd, som);
