import React from "react";
import Head from "../components/Head";
import Faqs from "../components/FAQ";
import Footer from "../components/Footer";

export default function faqs() {
    return (
        <div>
            <Head title="FAQ's" />

            <Faqs />
            <Footer />
        </div>
    );
}
