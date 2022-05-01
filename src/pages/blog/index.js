import * as React from "react";
import Head from "../../components/Head";
import { Link, graphql } from "gatsby";
import Headers from "../../components/Headers";
import Button from "../../components/Button";
import { CardWrapper } from "../../components/Cards";

// import Bio from "../components/bio"

const BlogIndex = ({ data, location }) => {
    const posts = data.allStrapiPost.nodes;

    if (posts.length === 0) {
        return (
            <p>
                No blog posts found. Add markdown posts to "content/blog"
                (or the directory you specified for the
                "gatsby-source-filesystem" plugin in gatsby-config.js).
            </p>
        );
    }

    // Original Page
    return (
        <>
            <Head title="Blog" />

            <Headers subtitle="Stay Informed" title="Blog Posts" />

            <CardWrapper>
                {posts.map((post) => {
                    return (
                        <div>
                            {console.log([post].title)}
                            <div className='uk-card'>
                                <div className="uk-card-header">
                                    {/* Thumbnail */}
                                </div>
                                <div className="uk-card-body">
                                    <h2>{post.title}</h2>
                                    <small>{post.publishDate}</small>
                                </div>
                                <div class="uk-card-footer">
                                    <Link to={post.categories[0].slug + '/' + post.slug}>Read More</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </CardWrapper>
        </>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        allStrapiPost(sort: {order: DESC, fields: publishDate}) {
            nodes {
                title
                slug
                publishDate
                categories {
                    slug
                }
            }
        }
    }
`;
