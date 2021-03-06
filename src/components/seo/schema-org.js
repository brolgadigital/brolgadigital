import * as React from "react";
import { Helmet } from "react-helmet";

export default React.memo(
    ({
        author,
        canonicalUrl,
        datePublished,
        defaultTitle,
        description,
        logo,
        isBlogPost,
        organization,
        title,
        url,
    }) => {
        const baseSchema = [
            {
                "@context": "http://schema.org",
                "@type": "WebSite",
                url,
                name: title,
                alternateName: defaultTitle,
            },
        ];

        const schema = isBlogPost
            ? [
                  ...baseSchema,
                  {
                      "@context": "http://schema.org",
                      "@type": "BreadcrumbList",
                      itemListElement: [
                          {
                              "@type": "ListItem",
                              position: 1,
                              item: {
                                  "@id": url,
                                  name: title,
                                  logo,
                              },
                          },
                      ],
                  },
                  {
                      "@context": "http://schema.org",
                      "@type": "BlogPosting",
                      url,
                      name: title,
                      alternateName: defaultTitle,
                      headline: title,
                      image: {
                          "@type": "ImageObject",
                          url: organization.url,
                      },
                      description,
                      mainEntityOfPage: {
                          "@type": "WebSite",
                          "@id": canonicalUrl,
                      },
                      datePublished,
                  },
              ]
            : baseSchema;

        return (
            <Helmet>
                {/* Schema.org tags */}
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            </Helmet>
        );
    }
);
