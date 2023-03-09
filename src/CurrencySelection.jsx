import { useContext, useEffect, useState } from "react"
import CurrencyContext from "./CurrencyContext";

export default function CurrencySelection(){

    const {currency, setCurrency} = useContext(CurrencyContext);
    const {exRate, setExRate} = useContext(CurrencyContext);
    

    // const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR');
    // const [exRate, setExRate] = useState(1);

    const handleSelect =(event) =>{
        event;
        event.target;//select
        event.target.value; //the selected value
       setCurrency (event.target.value);
    }

    const loadExRate = async()=>{
        const response = await fetch ('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php')
        const data= await response.json();
        
        const ex_rate=data.find((rate)=> {
            return rate.currency===currency;
        });
        setExRate(ex_rate.rate);
    }
    useEffect(()=>{
        console.log('Currency changed: ', currency);
        loadExRate();
        localStorage.setItem('currency', currency);
    }, [currency]);
    return (
        <div className="currency-selection">
            Select Currency:
            <select value={ currency } onChange={handleSelect}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CZK">CZK</option>
            </select>
{
    currency !=='EUR'
        ? <>EUR Exchange rate: {exRate}</>
        :''
}
        </div>
    )
}