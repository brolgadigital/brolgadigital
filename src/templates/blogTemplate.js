import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Template = ({ data }) => {

    const post = data.markdownRemark

    console.log(data)

    return (
        <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{post.frontmatter.title}</h1>
                    <h2>{post.frontmatter.date}</h2>
                    <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                </div>
            </div>
        </Layout>
    )
}

export default Template

export const pageQuery = graphql`
    query BlogPostByPath($pagePath: String) {
        markdownRemark(frontmatter: { path: { eq: $pagePath } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`