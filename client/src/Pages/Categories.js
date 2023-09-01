import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import React from 'react'
import useCategory from '../hooks/useCategory'

const Categories = () => {
    const categories = useCategory()
  return (
    <Layout title={'All Categories'}>
        <h1 className='text-center'>All Categories</h1>
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
                {categories.map((c) => (
                    <div className='col-md-6 mt-5 mb-5 gy-3' key={c._id}>
                            <Link to={`/category/${c.slug}`} className='btn btn-primary'>{c.name}</Link>
                    </div>
                ))}                
            </div>
        </div>
    </Layout>
  )
}

export default Categories