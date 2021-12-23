import './Category.css';

import Category from './Category';

import React, { Fragment, useState } from 'react';

export default function Categories() {

    const [categories, setCategories] = useState([
        {
            Name: 'В тісті',
            Subcategories: [
                {
                    Id: 0,
                    Name: 'З м\'ясом', 
                },
                {
                    Id: 1,
                    Name: 'Без м\'яса'
                }
            ]
        },

        {
            Name: 'Без тіста',
            Subcategories: [
                {
                    Id: 2,
                    Name: 'З м\'ясом', 
                },
                {
                    Id: 3,
                    Name: 'Без м\'яса'
                }
            ]
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