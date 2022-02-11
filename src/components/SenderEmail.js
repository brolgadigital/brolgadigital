import React from 'react'

const SenderEmail = () => {

    const url = new URL(
        "https://api.sender.net/v2/subscribers"
    );

    let headers = {
        "Authorization": "Bearer [your-token]",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    let data = {
        "email": "support@sender.net",
        "firstname": "Sender",
        "lastname": "Support",
        "groups": ["eZVD4w", "b2vAR1"],
        "fields": {"{$test_text}":"Documentation example","{$test_num}": 8}
    };

    fetch(url, {
        method: "POST",
        headers,body: JSON.stringify(data)
    }).then(response => response.json());


  return (
      <form>
          <p>Get Our Monthly Newsletter</p>
          <div className='name'>
                <label>First Name
                    <input type='text' name='fName'></input>
                </label>
            <label>Last Name
          <input type='text' name='lName'></input>
          </label>
          </div>
          <label for='email'>Email Address</label>
          <input type='email' id='email'></input>
          <input type="submit" value="Subscribe"/>
      </form>
  )
}

export default SenderEmail