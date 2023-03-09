import'./header.scss';
import { useState } from "react";
import Topmenu from "./Topmenu"
import CurrencySelection from './CurrencySelection';

export default function Header({page, setPage}){
    const [testValue, setTestValue] = useState(null);

    return (
  <header className="header">
    <div className="header__sitename">
        Elkins & Sons
    </div>
{/* 
    <div>
        Last menu item clicked: {testValue}
    </div> */}
<CurrencySelection />
    <Topmenu 
         currentItem={ page }
         setPage={ setPage }
         setTestValue={ setTestValue }
    />
</header>
)
}