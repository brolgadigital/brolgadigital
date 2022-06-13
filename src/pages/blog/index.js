import * as React from "react";
import Head from "../../components/Head";
import { Link, graphql } from "gatsby";
import Headers from "../../components/Headers";
import { CardWrapper } from "../../components/Cards";

const BlogIndex = ({ data, location }) => {
    const posts = data.allStrapiPost.nodes;

    if (posts.length === 0) {
        return (
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or
                the directory you specified for the "gatsby-source-filesystem"
                plugin in gatsby-config.js).
            </p>
        );
    }

    // Original Page
    return (
        <>
            <Head title="Blog" />

            <Headers subtitle="From Our Studio" title="Blog Posts" />

            <CardWrapper>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <div className="uk-card">
                                <div className="uk-card-header">
                                    {/* Thumbnail */}
                                </div>
                                <div className="uk-card-body">
                                    <h3 className="uk-h4">{post.title}</h3>
                                    <small>{post.publishDate}</small>
                                </div>
                                <div className="uk-card-footer">
                                    <Link to={"/" + post.slug}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </CardWrapper>
        </>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        allStrapiPost(sort: { order: DESC, fields: publishDate }) {
            nodes {
                title
                slug
                id
                publishDate
            }
        }
    }
`;
