import './styles.css'

import addIco from '../../../../icons/add_item.svg';

export default function Item({name, composition, price, picture}) {
    return(
        <div className='item-container'>
            <img src={`http://localhost:5000/api/items/img/${picture}.jpg`} alt={name}/>
            <h2>{name}</h2>
            
            <div className='item-info'>
                <h4>Склад</h4>

                <div>
                    {
                        composition.map((el, ind) => <p key={el + ind}>{el}</p>)
                    }
                </div>
            </div>

            <div className='item-bottom-panel'>

                <h2>{price}&#8372;/кг</h2>

                <div className='item-add-button'>
                    <img src={addIco} alt='Add item'/>
                </div>

            </div>

        </div>
    )
}