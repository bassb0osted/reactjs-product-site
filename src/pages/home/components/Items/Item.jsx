import './styles.css'

import addIco from '../../../../icons/add_item.svg';

import { StoreContext } from '../context';

import { useContext } from 'react';

export default function Item({name, composition, price, picture, _id}) {

    const {goods} = useContext(StoreContext);

    const [choosedGoods, setChoosedGoods] = goods;

    const addItemHandler = () => {

        const newChoosedGoods = {
            totalAmount: choosedGoods.totalAmount,
            totalPrice: choosedGoods.totalPrice,
            goods: [...choosedGoods.goods]
        };

        let productInGoods = newChoosedGoods.goods.find(el => el._id === _id);
        if(typeof productInGoods == 'undefined') {
            let product = {
                _id: _id,
                name: name,
                price: price,
                amount: 1
            };
            newChoosedGoods.goods.push(product);

            newChoosedGoods.totalAmount += 1;
        }
        else {
            productInGoods.amount += 1;
            productInGoods.price += price;
        }
        newChoosedGoods.totalPrice += price;
        setChoosedGoods(newChoosedGoods);
    }

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

                <button className='item-add-button' onClick={addItemHandler}>
                    <img src={addIco} alt='Add item'/>
                </button>

            </div>

        </div>
    )
}