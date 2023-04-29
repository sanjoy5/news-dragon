import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EditorInsigntLeft from '../../News/EditorInsight/EditorInsigntLeft'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h3 className='mb-4 fs-4 fw-bold'>All Categories</h3>

            <div className="mb-4">
                {
                    categories.map(category => {
                        return (

                            <div key={category.id} className="catlink w-100 py-2 ps-4 mb-2" >
                                <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary fs-5 fw-semibold'>{category.name}</Link>
                            </div>

                        )
                    })
                }
            </div>
            <EditorInsigntLeft></EditorInsigntLeft>

        </div>
    )
}

export default LeftNav