import './home.css';

import Header from '../../commonComponents/Header';
import Categories from './components/Categories/Categories';
import Search from './components/Toolbar/Search';
import CartButton from './components/Toolbar/CartButton';
import Sorting from './components/Toolbar/Sorting';

export default function Home() {
    return(
        <div>

            <Header />

            <div className = 'wrapper'>
                
                <div className='container'>

                    <div>
                        <Categories />
                    </div>


                    <div className='content'>

                        <div className='toolbar'> 

                            <Search />
                            <CartButton />
                            <Sorting />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}