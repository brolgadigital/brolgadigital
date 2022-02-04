import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query pageMeta {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const meta = data.site.siteMetadata;
  return (
    <>
      <Helmet
        defaultTitle={meta.title}
        title={title}
        titleTemplate={"%s || " + meta.title}
      />
    </>
  );
};

export default Head;
