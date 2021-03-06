import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import SenderEmail from "../components/Layout/SenderEmail";
import { InlineWidget } from "react-calendly";
import { StaticImage } from "gatsby-plugin-image";
import ContactForm from "../components/email/ContactForm";

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

        document
            .getElementById("bd-copy-success")
            .classList.toggle("bd-visible");
        setTimeout(function () {
            document
                .getElementById("bd-copy-success")
                .classList.toggle("bd-visible");
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
                    alt=""
                />
                <p>
                    For more information about our business packages or ongoing
                    support subscriptions, email{" "}
                    <button
                        className="uk-button uk-button-link bd-copy-email"
                        onClick={copyEmail}
                        id="brolga-email"
                    >
                        hello@brolgadigital.com.au
                        <span className="uk-badge" id="bd-copy-success">
                            Copied!
                        </span>
                    </button>{" "}
                    call{" "}
                    <a
                        className="uk-button uk-button-link"
                        href="tel:0391911063"
                    >
                        03 9191 1063
                    </a>{" "}
                    or book a free consult
                </p>

                <ContactForm />
            </div>

            <Headers
                subtitle="Find out what we can do for you"
                title="Book a Consultation"
            />

            <div className="uk-margin-medium-bottom">
                <InlineWidget url="https://calendly.com/brolgadigital/consult" />
            </div>

            <Headers subtitle="Keep up to date with us" title="Mailing List" />
            <SenderEmail />
        </>
    );
}
