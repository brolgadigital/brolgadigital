import React from "react";
import SenderList from "./SenderConfig";
import { useForm } from "react-hook-form";

export default function MailingList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // fetch(`/api/forms`, {
        //     method: `POST`,
        //     body: JSON.stringify(data),
        //     headers: {
        //     "content-type": `application/json`,
        // },
        // })
        // .then(res => res.json())
        // .then(body => {
        //     console.log(`response from API:`, body)
        // })
        SenderList(data);
    };

    console.log({ errors });

    // state = {
    //     email: "",
    //     firstName: "",
    //     lastName: "",
    // }

    // handleInputChange = event => {
    //     const target = event.target
    //     const value = target.value
    //     const name = target.name
    //     this.setState({
    //         [name]: value,
    //     })
    // }
    // handleSubmit = event => {
    //     event.preventDefault()
    //     // alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
    //     SenderList(`email:${this.state.email}, firstName:${this.state.firstName}, lastName:${this.state.lastName}`)
    // }

    // render() {
    return (
        <div>
            <form className="mailSubscribe" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                    })}
                />

                <label htmlFor="email">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    {...register("firstName", {
                        required: true,
                        maxLength: 80,
                    })}
                />

                <label htmlFor="email">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    {...register("lastName", {
                        required: false,
                        maxLength: 100,
                    })}
                />

                <button className="button boldButton" type="submit">
                    Sign Up
                </button>
                <input
                    className="button lessButton"
                    type="reset"
                    value="Clear"
                />
            </form>
        </div>
    );
    // }
}
