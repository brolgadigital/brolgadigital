import React from "react";
import Head from "../components/Head";
import { Helmet } from "react-helmet";
import Headers from "../components/Headers";
import SenderEmail from "../components/Layout/SenderEmail";
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
            <Helmet>
                <script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    // async
                ></script>
            </Helmet>

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
            {/* <div className="uk-margin-medium-bottom bd-calendar">
                <iframe
                    src="https://cal.brolgadigital.com.au/brolgadigital/consult"
                    title="Book a consultation with Brolga Digital"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div> */}

            <div className="uk-margin-medium-bottom">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/brolgadigital/consult"
                    style={{ minWidth: "320px", height: "630px" }}
                ></div>
            </div>

            <Headers subtitle="Keep up to date with us" title="Mailing List" />
            <SenderEmail />
        </>
    );
}
