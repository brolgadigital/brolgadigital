import * as React from "react";
import Head from "../../components/Head";
import { Link, graphql } from "gatsby";
import Headers from "../../components/Headers";
import Button from "../../components/Button";

// import Bio from "../components/bio"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <>
        <Head title="Blog" />

        <Headers subtitle="What Brolga Digital has to say" title="Blog Posts" />
        {/* <Seo title="All posts" /> */}
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </>
    );
  }

  return (
    <>
      <Head title="Blog" />

      <Headers subtitle="Stay Informed" title="Blog Posts" />
      {/* <Seo title="All posts" /> */}
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.frontmatter.path;

          return (
            <li key={post.frontmatter.path}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>{title}</h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  {/* <Button text='Read More' to={post.frontmatter.path} /> */}
                  <h4>
                    <Link to={post.frontmatter.path}>Read More {">"}</Link>
                  </h4>
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { layout: { eq: "blog" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          path
        }
      }
    }
  }
`;
