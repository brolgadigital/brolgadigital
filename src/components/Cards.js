import React from 'react'
import Button from './Button'



export default function Cards(props) {
    
    const listItems = props.details.map((detail, index) => <li key={index}>{detail}</li>);

    return (
        <div className={props.message ? 'card sale' : 'card'} data-content={props.message}>
            <h3>{props.title}</h3>
            <hr></hr>
            <div className='details'>
                <p>{props.desc}</p>
                <h3>Includes:</h3>
                <ul>{listItems}</ul>
            </div>
            <p>Prices from ${props.price}, get started with a free 30 minute consult</p>
            
            <Button text='Book Now'/>
            <Button text='Learn More' class='tinyButton' />
            
        </div>
    )
}

Cards.defaultProps = {
    title: 'Package Name',
    desc: 'Duis suscipit purus vitae lectus pharetra egestas. Mauris auctor pulvinar nibh, sed pellentesque dolor imperdiet quis. Aenean finibus commodo orci, ac blandit mauris ultrices quis',
    price: '200',
    details: ['weekly backups', 'domain and hosting', 'basic email support'],
}