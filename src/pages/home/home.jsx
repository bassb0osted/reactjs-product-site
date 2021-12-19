import './home.css';

import Header from '../../commonComponents/Header';
import Categories from './components/Categories';

export default function Home() {
    return(
        <div>
            <Header />

            <div className = 'wrapper'>
                
                <Categories />

            </div>

        </div>
    );
}