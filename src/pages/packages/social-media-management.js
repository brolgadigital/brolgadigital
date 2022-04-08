import React from 'react'
import Head from '../../components/Head'
import Headers from '../../components/Headers'
import { PriceCard, CardWrapper } from '../../components/Cards'
import { Link } from 'gatsby'

const SocialMedia = () => {
    return (
        <>
            <Head title="Social Media Management Packages" />
            <Headers
                subtitle="Don't feel left behind"
                title="Social Media Management Packages"
            />
            <div className="uk-clearfix">
                <p>
                    Making and scheduling social content can be time consuming and challenging. We can take some of these challenges away, and work with your business to promote it across the platforms that work best for your clientele.
                </p>
            </div>

            <CardWrapper>
                <PriceCard
                    title="Base Plan"
                    price="120"
                    desc="Ideal for 1-2 posts per week"
                    details={[
                        'Monthly Planning Meeting',
                        '2 Social Accounts',
                        '8 Posts (images or text)',
                    ]}
                />
                <PriceCard
                    title="Extension Plan"
                    price="550"
                    desc="Perfect small businesses with regular updates"
                    details={[
                        'Fortnightly Planning Meeting',
                        '5 Social Accounts',
                        '20 Posts',
                        '2 Animations/Motion Graphics',
                    ]}
                />
                <PriceCard
                    title="Power Poster Plan"
                    price="1600"
                    desc="Share all the content, all the time"
                    details={[
                        'Weekly Planning Meeting',
                        'Unlimited Social Accounts',
                        'Unlimited Posts',
                        '4 Animations/Motion Graphics',
                        'On-demand alterations',
                    ]}
                />
            </CardWrapper>
        </>
    )
}

export default SocialMedia