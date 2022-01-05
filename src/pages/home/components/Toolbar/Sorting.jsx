import './styles.css';

import { StoreContext } from '../context';

import { useContext } from 'react';

export default function Sorting() {

    const {sort} = useContext(StoreContext);

    const [choosedSort, setChoosedSort] = sort;

    const sortArr = ['ціні(за спаданням)', 'ціні(за зростанням)']; // sorting types

    const changeSortHandler = (el) => { // changes type of sorting(sorting of items)
        setChoosedSort(el);
    } 

    return(
        <div className='sorting-container'>

            <p>Сортувати по: <span>{choosedSort}
                
                <ul className='sorting-menu'>

                    {
                        sortArr.map(el => 
                            <li className={choosedSort === el ? 'sorting-menu-item-selected' : ''} onClick={() => changeSortHandler(el)}>{el}</li>
                        )
                    }

                </ul>

            </span></p>

        </div>
    );

}