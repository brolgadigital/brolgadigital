import React from "react";
import Head from "../../components/Head";
import Headers from "../../components/Headers";
import { InfoCard, CardWrapper } from "../../components/Cards";
// import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";

const content = () => {
  return (
    <>
            <Head title="Content Management" />

            <Headers
                subtitle="Get found online"
                title="Comprehensive Content Management"
                id="seo"
            />

            <div className="uk-clearfix">
                <StaticImage
                    src="../../images/graphics/seo.png"
                    className="uk-align-right uk-width-2-5"
                    alt=''
                />
            </div>

            <CardWrapper>
                <InfoCard
                    title="Copywriting"
                    icon="file-edit"
                    desc="Get some help writing and editing the text across blogs, webpages, ads or social posts."
                />
                <InfoCard
                    title="Graphics Design and Templates"
                    icon="image"
                    desc="Illustrations, diagrams or templates that you can edit yourself; our graphic design service will take your content to the next level."
                />
                <InfoCard
                    title="Animations"
                    icon="play-circle"
                    desc="Animations are an eye-catching way to draw people to your content. Or you can add custom and branded gifs to your social posts!"
                />
                <InfoCard
                    title="Photography and Video"
                    icon="camera"
                    desc="Clear product photos for your online shop or fun shorts for TikTok, we've got the tech to make you look your best!"
                />
                <InfoCard
                    title="Content Scheduling"
                    icon="calendar"
                    desc="Finding it overwhelming to be online all the time? We’ll schedule your content to come out when you need it, so you don’t need to set alarms anymore."
                />
            </CardWrapper>
        </>
  )
}

export default content