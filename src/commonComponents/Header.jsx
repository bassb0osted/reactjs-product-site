import './styles.css'

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
                            <li><a href = '#'>Головна</a></li>
                            <li><a href = '#'>Кошик</a></li>
                            <li><a href = '#'>Доставка та оплата</a></li>
                            <li><a href = '#'>Контакти</a></li>
                        </ul>
                    </nav>

                </div>

            </div>

        </header>
    );
}