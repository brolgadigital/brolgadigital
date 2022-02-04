import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import Cards from "../../components/Cards";
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
      <StaticImage
        src="../../images/graphics/branding.png"
        className="brand-image"
      />
      <p className="last">
        At Brolga Digital, we promise not to build something complicated and
        then abandon you when we're done. We offer a range of packages, charged
        monthly or as used (depending on our agreement). Check out our{" "}
        <Link to="/packages">packages</Link> for more information on how we can
        support you long term.
      </p>

      <div className="cardwrapper">
        <Cards
          title="Domain Management"
          icon="gift"
          desc="We take all the technical challenges away from getting your website on the internet, and we monitor to make sure it's always up and running"
        />
        <Cards
          title="Backups and Updates"
          icon="gift"
          desc="Every week, we backup our servers, then run any plugin or security updates, ensuring your data and content is always safe."
        />
        <Cards
          title="Phone, email and chat support"
          icon="gift"
          desc="However you communicate, we'll be there. And we'll always do our best to fix any problems and answer your questions."
        />
      </div>
    </>
  );
};

export default support;
