import './styles.css';

import warning from '../../../../icons/warning.png';

import Item from './Item';

import { Fragment, useState } from 'react/cjs/react.development';
import { useEffect } from 'react';

export default function Items() {
    
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
    
    return(
        <div className='items-container'>
            
            {
                error ? 
                <div className='warning'> 
                    <img src={warning} alt="warning" height="40px"/>
                    <div>Сталася помилка. Просимо вибачення за тимчасові не зручності.</div>
                </div> :
                items.map(el => 
                    <Fragment key={el._id}>
                        <Item name={el.name} composition={el.composition} price={el.price} picture={el.picture}/>
                    </Fragment>)
            }
            
        </div>
    );
}