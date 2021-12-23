import './Category.css';

import arrow from '../../../../icons/arrow_button.svg';

import { useRef } from 'react/cjs/react.development';

// hide or show subcategories onClick and rotate the arrow
function subcatVisibility(ref, imgRef) {
    if(ref.current.style['visibility'] === 'hidden') {
        ref.current.style['visibility'] = 'visible';
        ref.current.style['opacity'] = 1;
        ref.current.style['height'] = 'auto';
        ref.current.style['transition'] = '0.5s';

        imgRef.current.style['transform'] = 'rotate(0deg)'
    }

    else {
        ref.current.style['visibility'] = 'hidden';
        ref.current.style['opacity'] = 0;
        ref.current.style['height'] = 0;
        ref.current.style['transition'] = '0s';

        imgRef.current.style['transform'] = 'rotate(180deg)'
    }
}

export default function Category({Name, Subcategories}) {
    
    const subcategoriesRef = useRef(null); // ref to <ul> with subcat
    const imgRef = useRef(null); // ref to <img>

    return(
        <ul className = 'category'>
            <li>
                <div onClick={() => subcatVisibility(subcategoriesRef, imgRef)}>
                    <p>{Name}</p>
                    <img src = {arrow} alt="arrow" height = "8.5px" ref={imgRef}/>
                </div>

                <ul className = 'category-elements' ref={subcategoriesRef}>
                    {
                        Subcategories.map(el =>             
                            <li key={el.Id}>
                                <input type="checkbox" id={el.Id}/>
                                <label for={el.Id}><p>{el.Name}</p></label>
                            </li>
                        )
                    }
                </ul>
            </li>
        </ul>

    );
}