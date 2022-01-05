import './styles.css';

import { StoreContext } from '../context';

import { useContext, useRef } from 'react';

export default function Subcategory({_id, value}) {

    const checkboxRef = useRef(null); // ref to checkbox

    const {filter} = useContext(StoreContext);

    const [filt, setFilt] = filter;

    const clickHandler = () => { // func adds or deletes subcategory to(from) array of subcategories(filter of items)
        let isChecked = checkboxRef.current.checked;
        console.log(isChecked)
        if(isChecked)
            setFilt(prev => [...prev, value]);
        
        else {
            let arr = filt.filter(el => el !== value);
            setFilt(arr);
        }
    }

    return(
        <li> 
            <div onClick={clickHandler}>
                <input type="checkbox" id={_id} ref={checkboxRef}/>
                <label for={_id}><p>{value}</p></label>
            </div>
        </li>
    );

}