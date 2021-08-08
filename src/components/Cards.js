import React from 'react'
import Button from './Button'
import * as Icon from 'react-feather'



export default function Cards(props) {
    const iconSvg = {'search': <Icon.Search />, 'layout': <Icon.Layout />, 'clipboard': <Icon.Clipboard />, 'brand': <Icon.Loader />};
    // const listItems = props.details.map((detail, index) => <li key={index}>{detail}</li>);

    return (
        <div className={props.message ? 'card sale' : 'card'} data-content={props.message}>
            <div>
                {iconSvg[props.icon]}
                <h3>{props.title}</h3>
                <hr></hr>
            </div>
            <p>{props.desc}</p>
            {/* <p>Starting from ${props.price}</p> */}
            
            <Button text='Learn More' class='tinyButton' to={props.info}/>
        </div>
    )
}

Cards.defaultProps = {
    title: 'Package Name',
    desc: 'Duis suscipit purus vitae lectus pharetra egestas. Mauris auctor pulvinar nibh, sed pellentesque dolor imperdiet quis. Aenean finibus commodo orci, ac blandit mauris ultrices quis',
    price: '200',
    icon: '',
    book: '',
    info: '/packages',
}