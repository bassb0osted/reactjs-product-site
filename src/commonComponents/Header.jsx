import './styles.css'

import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className = 'header'>
            
            <div className = 'wrapper'>
                
                <div className = 'header-container'>

                    <div className = 'logo'>
                        <h1>Від бабусі</h1>
                        <p>магазин полуфабрикатів</p>
                    </div>

                    <nav className = 'header-menu'>
                        <ul>
                            <li>
                                <Link to='/'>Головна</Link>
                            </li>

                            <li>
                                <Link to='/cart'>Кошик</Link>
                            </li>

                            <li>
                                <Link to='/'>Доставка та оплата</Link>
                            </li>
                            
                            <li>
                                <Link to='/'>Контакти</Link>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>

        </header>
    );
}