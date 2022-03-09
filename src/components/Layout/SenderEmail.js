import React, { useState} from 'react'

const SenderEmail = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        const myHeaders = new Headers()

        myHeaders.append("Authorization", `Bearer ${process.env.GATSBY_SENDER_TOKEN}`)
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept", "application/json")

        const data = {
            "email": email,
            "firstname": fName,
            "lastname": lName,
            "groups": ["boQ4Ej"]
        };

        const options = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify( data )
        }
        try {
            fetch( 'https://api.sender.net/v2/subscribers', options)
            .then(response => response.json());
        } catch (e) {
            console.log('Error occurred during authentication');
        }
    }


    return (
        <form className='uk-width-1' onSubmit={handleSubmit}>
            <p>Get Our Monthly Newsletter</p>

            <div uk-grid=''>
            <div className='uk-child-width-1-2 uk-flex'>
                <div className='uk-margin-right'><label className='uk-form-label'>First Name</label>
                    <input 
                        className='uk-input'
                        type='text'
                        name='fName'
                        onChange={(e) => {
                            setFName(e.target.value);
                        }}
                        value={fName}
                    ></input>
                </div>
                <div className='uk-margin-left'>
                <label className='uk-form-label'>Last Name</label>
                    <input
                        className='uk-input'
                        type='text'
                        name='lName'
                        onChange={(e) => {
                            setLName(e.target.value);
                        }}
                        value={lName}
                    ></input>
                </div>
            </div>
            <div className='uk-width-1'>
            <label 
            className='uk-form-label'
            htmlFor='email'>Email Address</label>
            <input
            className='uk-input'
                type='email'
                id='email'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
            ></input>
            </div>
            
            <div><button className='uk-button' type='submit'>Subscribe</button></div>
            </div>
        </form>
    )
}

export default SenderEmail;