import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import SenderEmail from '../components/Layout/SenderEmail'
import { StaticImage } from "gatsby-plugin-image";

export default function contact() {
    const copyEmail = () => {
        let range = document.createRange();
        let selection = document.getSelection();
        let copyText = document.getElementById("brolga-email");

        range.selectNode(copyText);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();

        copyText.classList.toggle('copied')
        setTimeout(function() {
            copyText.classList.toggle('copied')
        }, 1000);
    };

    return (
        <>
            <Head title="Contact Us" />

            <Headers subtitle="Reach out and say hello" title="Contact Us" />
            
            <div className="uk-clearfix">
                <StaticImage
                    src="../images/graphics/contact.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
                <p>
                    For more information about our business packages or ongoing
                    support subscriptions, email{" "}
                    <button onClick={copyEmail} id="brolga-email">
                        hello@brolgadigital.com.au
                    </button>{" "}
                    or book a free consult
                </p>
            </div>
            

            <Headers
                subtitle="Find out what we can do for you"
                title="Book a Consultation"
            />
            <div className="uk-margin-medium-bottom bd-calendar">
                <iframe
                    src="https://cal.brolgadigital.com.au/brolgadigital/consult"
                    title="Book a consultation with Brolga Digital"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>

            <Headers subtitle='Keep up to date with us' title='Mailing List' />
            <SenderEmail />
        </>
    );
}
