import React, { useState} from 'react'

const SenderEmail = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        const url = new URL(
            "https://api.sender.net/v2/subscribers"
        );

        let headers = {
            "Authorization": `Bearer ${process.env.GATSBY_SENDER_TOKEN}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        let data = {
            "email": email,
            "firstname": fName,
            "lastname": lName,
            "groups": ["boQ4Ej"]
        };
        try {
            fetch(url, {
            method: "POST",
            headers,body: JSON.stringify(data)
        }).then(response => response.json());
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