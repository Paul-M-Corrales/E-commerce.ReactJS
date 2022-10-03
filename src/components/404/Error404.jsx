import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {


    return (
        <div className='text-center min-vh-100'>
        <h2 className='text-center mt-5 error404 text-white error404 h1'><b>ERROR 404 PAGE NOT FOUND</b></h2>
        <Link to='/' className='error404 text-center'>Volver al Inicio</Link>
        </div>
    )
}

export default Error404;