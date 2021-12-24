import './styles.css'

import Item from './Item'

import { useState } from 'react/cjs/react.development';

export default function Items() {
    
    const [items, setItems] = useState([
        {

        }
    ]);
    
    return(
        <div className='items-container'>
            <Item />
        </div>
    );
}