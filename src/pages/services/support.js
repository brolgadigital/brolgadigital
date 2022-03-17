import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const support = () => {
    return (
        <>
            <Head title="Customer Support" />

            <Headers
                subtitle="Find long term solutions"
                title="Ongoing Support and Maintenance"
                id="support"
            />

            <div className="uk-clearfix">
                <StaticImage
                    src="../../images/graphics/branding.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
                <p>
                    At Brolga Digital, we promise not to build something complicated
                    and then abandon you when we're done. We offer a range of
                    packages, charged monthly or as used (depending on our
                    agreement). Check out our <Link to="/packages">packages</Link>{" "}
                    for more information on how we can support you long term.
                </p>
            </div>

            <CardWrapper>
                <InfoCard
                    title="Domain and Hosting Management"
                    icon="database"
                    desc="We take all the technical challenges away from getting your website on the internet and make sure that everyone can find you."
                />
                <InfoCard
                    title="Uptime Monitoring"
                    icon="bolt"
                    desc="Make sure that your website is always accessible with uptime monitoring. If something goes wrong, we know straight away and get to work fixing it."
                />
                <InfoCard
                    title="Backups and Updates"
                    icon="server"
                    desc="Every week, we back up our servers, then run any plugin or security updates, ensuring your data and content is always safe."
                />
                <InfoCard
                    title="Phone, email or chat troubleshooting and support"
                    icon="lifesaver"
                    desc="However you communicate, we'll be there. And we'll always do our best to fix any problems and answer your questions."
                />
            </CardWrapper>
        </>
    );
};

export default support;
