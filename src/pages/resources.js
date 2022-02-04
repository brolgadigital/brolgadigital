import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import { Link } from "gatsby";

export default function packages() {
  return (
    <div>
      <>
        <Head title="Downloads and Resources" />

        <Headers
          subtitle="Make it your own with"
          title="DIY Templates and Instructionals"
        />
        <p>
          Our DIY resources are still being developed. If you want to know when
          they're ready, sign up to our <Link to="/contact">mailing list</Link>
        </p>
      </>
    </div>
  );
}
