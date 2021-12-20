import './styles.css';

export default function Sorting() {

    return(
        <div className='sorting-container'>

            <p>Сортувати по: <span>популярності
                
                <ul className='sorting-menu'>

                    <li className='sorting-menu-item-selected'>популярності</li>

                    <li>ціні</li>

                    <li>рейтингу</li>

                </ul>

            </span></p>

        </div>
    );

}