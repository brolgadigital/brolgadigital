import React from 'react'
import Button from './Button'

export default function PriceCard(props) {
    
    const listItems = props.details.map((detail, index) => <li key={index}>{detail}</li>);
    
    return (
        <div className="pricecard card">
            <h3>{props.title}</h3>
            <p><span className="price">{props.price}</span><br></br> per month</p>
            <hr></hr>
            <div className='details'>
                <p>{props.desc}</p>
                <h3>Includes:</h3>
                <ul>{listItems}</ul>
            </div>
            {/* <Button /> */}
        </div>
    )
}

PriceCard.defaultProps = {
    title: 'Package Name',
    desc: 'Duis suscipit purus vitae lectus pharetra egestas. Mauris auctor pulvinar nibh, sed pellentesque dolor imperdiet quis. Aenean finibus commodo orci, ac blandit mauris ultrices quis',
    price: '200',
    details: ['weekly backups', 'domain and hosting', 'basic email support'],
}