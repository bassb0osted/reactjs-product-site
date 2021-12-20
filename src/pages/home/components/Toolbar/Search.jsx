import './styles.css';

import searchIco from '../../../../icons/search.png';

export default function Search() {

    return(
        <div className='search-container'>
            
            <img src={searchIco} alt='search icon' height="25px"/>
            <input type='text' placeholder='Пошук'/>

        </div>
    );

}