import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
// import MailingList from '../components/email/MailingList'
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
    };

    return (
        <div>
            <Head title="Contact Us" />

            <Headers subtitle="Reach out and say hello" title="Contact Us" />
            <StaticImage
                src="../images/graphics/contact.png"
                className="brand-image"
            />
            <p className="last">
                For more information about our business packages or ongoing
                support subscriptions, email{" "}
                <button onClick={copyEmail} id="brolga-email">
                    hello@brolgadigital.com.au
                </button>{" "}
                or book a free consult
            </p>

            {/* <Headers subtitle='Keep up to date with us' title='Mailing List' />
        <MailingList /> */}

            <Headers
                subtitle="Find out what we can do for you"
                title="Book a Consultation"
            />
            <div className="cal">
                <iframe
                    src="https://cal.brolgadigital.com.au/brolgadigital/consult"
                    title="Book a consultation with Brolga Digital"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}
