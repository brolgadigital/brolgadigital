import React from "react";
import Head from "../components/Head";
import Headers from "../components/Headers";
import PriceCard from "../components/PriceCard";
import { Link } from "gatsby";

export default function subscriptions() {
    return (
        <div>
            <>
                <Head title="Packages" />

                <Headers
                    subtitle="What makes Brolga Digital different?"
                    title="Ongoing Support Packages"
                />

                <p>
                    Ongoing support with Brolga Digital is simple. You own
                    everything. We just manage it. From creating backups to
                    scheduling social media posts, we can handle it for you. We
                    aim to take the stress out of online content by
                    consolidating all your online marketing activities and
                    managing them on your behalf.
                </p>

                <p className="last">
                    We know it’s stressful to choose a web designer, only to
                    have them deliver files and not offer ongoing support. We
                    promise to be different, and support you and our products.
                    It’s like having an in-house media and web manager, at a
                    fraction of the cost.
                </p>

                <div className="cardwrapper">
                    <PriceCard
                        title="Website Support Package"
                        price="50"
                        desc="Perfect for those who need their website to just work with no extra hassle"
                        details={[
                            "weekly backups",
                            "domain and hosting",
                            "email and phone support",
                            "uptime monitoring",
                            "plugin and security updates",
                        ]}
                    />
                    <PriceCard
                        title="Small Business Starter Package"
                        price="1200"
                        desc="Ideal for those just getting started online"
                        details={[
                            "website design",
                            "social media setup",
                            "brand development",
                            "marketing strategies",
                        ]}
                        single="true"
                    />
                    <PriceCard
                        title="Marketing Package"
                        price="250"
                        desc="Let us take the hard work out of digital and online marketing"
                        details={[
                            "post and blog proofreading",
                            "graphic design assistance",
                            "scheduled social posts",
                            "monthly planning and advice call",
                            "analytics monitoring and advice",
                        ]}
                    />
                </div>

                <p className="last">
                    Need something a little different, or just a one off? We're
                    flexible, just <Link to="/contact">contact us</Link>. We
                    also offer frequent discounts, including substantial savings
                    if you use several of our packages or services!
                </p>

                <Headers
                    subtitle="It starts with a conversation"
                    title="Book a Consultation"
                />
                <p className="last">
                    Ready to dive in or just need some questions answered?{" "}
                    <Link to="/contact">Book a consultation</Link> to find out
                    how we can help your business grow using digital platforms.
                </p>

                <Headers
                    subtitle="Need help getting something started?"
                    title="Brolga Digital Design Services"
                />
                <p>
                    Need help with SEO or ecommerce but not looking for ongoing
                    support? Check out our{" "}
                    <Link to="/services">design services</Link>.
                </p>
            </>
        </div>
    );
}
