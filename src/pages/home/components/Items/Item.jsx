import './styles.css'

import testImg from './im.png';

import addIco from '../../../../icons/add_item.svg';

export default function Item() {
    return(
        <div className='item-container'>
            <img src={testImg} alt='img' height='155px'/>
            <h2>Котлети</h2>
            
            <div className='item-info'>
                <h4>Склад</h4>

                <div>
                    <p>Фарш свинний</p>
                    <p>Цибуля</p>
                    <p>Морква</p>
                    <p>Соль</p>
                    <p>Перець</p>
                    <p>Фарш телячий</p>
                    <p>Хліб білий</p>
                    <p>Масло</p>
                    <p>Мука</p>
                    <p>Фарш телячий</p>
                    <p>Хліб білий</p>
                    <p>Масло</p>
                    <p>Мука</p>
                </div>
            </div>

            <div className='item-bottom-panel'>

                <h2>195$</h2>

                <div className='item-add-button'>
                    <img src={addIco} alt='Add item'/>
                </div>

            </div>

        </div>
    )
}