import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xyyodrzp");
    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }

  return (
    <form className='uk-width-1 uk-width-1-2@m uk-margin'onSubmit={handleSubmit}>
        <div className='uk-grid-small' uk-grid=''>
            <div className='uk-width-1-1 uk-child-width-1-2 uk-flex'>
                <div className='uk-margin-right'>
                    <label className='uk-form-label'>Name</label>
                    <input
                        className='uk-input'
                        type='text'
                        name='name'
                    ></input>
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className='uk-margin-left'>
                    <label className='uk-form-label'>Email</label>
                    <input 
                        className='uk-input'
                        id="email"
                        type="email" 
                        name="email"
                    ></input>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
            </div>
            <div className='uk-width-1'>
                <label className='uk-form-label'>Message</label>
                <textarea
                    className='uk-textarea'
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
        
            <div>
                <button className='uk-button' type="submit" disabled={state.submitting}>Send Message</button>
            </div>
        </div>
    </form>
  )
}

export default ContactForm