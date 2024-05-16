// eslint-disable-next-line no-unused-vars
import React from 'react'
import './styles.css'

const Card = ({img, name, username, correo}) => {
    return (
        
        <div className='card'>
            <img id='img' src={img} />
            <div id='information'>
                <div id='name'> <p> {name} </p></div>
                <div id='username'><p> {username} </p></div>
                <div id='correp'> <p> {correo} </p></div>
            </div>
        </div>
    )
}

export default Card
