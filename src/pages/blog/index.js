import * as React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from '../../components/Layout'

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        {/* <Seo title="All posts" /> */}
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* <Seo title="All posts" /> */}
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.frontmatter.path

          return (
            <li key={post.frontmatter.path}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.frontmatter.path} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: { templateKey: { eq: "blog" }}}
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
`