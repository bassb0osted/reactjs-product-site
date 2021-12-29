import './Category.css';

import Category from './Category';

import React, { Fragment, useState, useEffect } from 'react';

export default function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/categories")
        .then(res => {
            if(res.ok)
                return res.json();
        })
        .then(data => {
            setCategories(data);
        })
    }, [])

    return(
        <div className = 'categories'>
            
            {
                categories.map(el => 
                    <Fragment key={el._id}>
                        <Category name={el.name} subcategories={el.subcategories}/>
                    </Fragment>
                )
            }

        </div>
    );
}