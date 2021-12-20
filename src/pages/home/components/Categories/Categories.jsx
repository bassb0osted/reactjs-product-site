import './Category.css';

import Category from './Category';

import React, { Fragment, useState } from 'react';

export default function Categories() {

    const [categories, setCategories] = useState([
        {
            Name: 'В тісті',
            Subcategories: ['З м\'ясом', 'Без м\'яса']
        },

        {
            Name: 'Без тіста',
            Subcategories: ['З м\'ясом', 'Без м\'яса']
        }
    ])

    return(
        <div className = 'categories'>
            
            {
                categories.map((el, ind) => <Fragment key={el.Name+ind}>{Category(el)}</Fragment>)
            }

        </div>
    );
}