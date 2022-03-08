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
      <form onSubmit={handleSubmit}>
          <p>Get Our Monthly Newsletter</p>
          <div className='name'>
                <label>First Name
                    <input 
                        type='text'
                        name='fName'
                        onChange={(e) => {
                            setFName(e.target.value);
                        }}
                        value={fName}
                    ></input>
                </label>
                <label>Last Name
                    <input
                        type='text'
                        name='lName'
                        onChange={(e) => {
                            setLName(e.target.value);
                        }}
                        value={lName}
                    ></input>
          </label>
          </div>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            value={email}
        ></input>
          <button className='lessButton' type='submit'>Subscribe</button>
      </form>
  )
}

export default SenderEmail;