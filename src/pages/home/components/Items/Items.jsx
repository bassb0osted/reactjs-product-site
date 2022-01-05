import './styles.css';

import warning from '../../../../icons/warning.png';

import Item from './Item';

import { StoreContext } from '../context';

import { useState, useEffect, useContext } from 'react';

function sortPriceDecrease(a, b) {
    if(a.price > b.price)
        return 1;
    if(a.price < b.price)
        return -1;
    return 0;
}

function sortPriceIncrease(a, b) {
    if(a.price < b.price)
        return 1;
    if(a.price > b.price)
        return -1;
    return 0;
}

export default function Items() {
    
    const {filter, sort} = useContext(StoreContext); // filter changes in the "Subcategory" component, filter: [state, setState]

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/items")
            .then(res => {
                if(res.ok)
                    return res.json();
                throw res;
            })
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error("Error fetching: ", error);
                setError(true);
            })
    }, [])

    
    function sortHandler(a, b) {

        switch(sort[0]) {
            case 'ціні(за спаданням)':
                return sortPriceIncrease(a, b);
            
            case 'ціні(за зростанням)':
                return sortPriceDecrease(a, b);

            default:
                return sortPriceIncrease(a, b);
        }

    }
    
    return(
        <div className='items-container'>
            
            {
                error ? 
                <div className='warning'> 
                    <img src={warning} alt="warning" height="40px"/>
                    <div>Сталася помилка. Просимо вибачення за тимчасові не зручності.</div>
                </div> :
                items
                .filter(el => filter[0].length ? filter[0].includes(el.subcategory.value) : true) // filter of items
                .sort(sortHandler)
                .map(el => <Item key={el._id} name={el.name} composition={el.composition} price={el.price} picture={el.picture}/>)
            }
            
        </div>
    );
}
