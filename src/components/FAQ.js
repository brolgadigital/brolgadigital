import React from "react";
import Headers from "./Headers";
import Questions from "./Questions";

export default function FAQ() {
  return (
    <>
      <Headers
        title="Frequently Asked Questions"
        subtitle="Find out more with"
      />

      <div className="faqs">
        <Questions
          q="Who owns the finished website and content?"
          a="You do! Once the project is finished, you own the rights to all interlectual property."
        />
        <Questions
          q="Can I stop using your services?"
          a="Absolutely. And we'll make transferring your domain, accounts and files really easy too."
        />
        <Questions
          q="Why choose Brolga Digital?"
          a="At Brolga Digital we only work on bespoke projects for small businesses. You'll never get a generic template or stock logo. Our design packages are all customised to your needs."
        />
        <Questions
          q="How long will it take to launch?"
          a="This can vary on the scope of your project, but we'll make sure to communicate our timelines and expectations with you throughout the process"
        />
        <Questions
          q="Are there hidden costs?"
          a="Not at all. We advertise a starting price, as the final cost will depend on the specifics you require. But once we agree on a price, it won't change"
        />
        <Questions
          q="What platforms do you use/support?"
          a="Our go-to platforms and frameworks are Wordpress, React and Square; but we've worked with many more and are happy to discuss using platforms you're familiar with (or providing training for new solutions)."
        />
        <Questions
          q="Do you offer payment plans?"
          a="We split the payment for every project into 3 parts: 30% deposit to ensure your place in our production schedule, 35% after the initial design and concepting phases, and 35% when the project is complete."
        />
        <Questions
          q="Where are you based?"
          a="We're based in the western suburbs of Melbourne, Australia; but we've worked with people from all over the country. And we'd also be thrilled to work with international clients"
        />
        <Questions
          q="When can we start?"
          a="As soon as you book a free project consultation!"
        />
        <Questions
          q="I’m anxious to invest in a new site…"
          a="A lot of people are, and this is why we aim to keep the learning curve low with our monthly 'Media Manager' plans. We'll help you every step of the way, and give you a custom solution that really works for your business."
        />
      </div>
    </>
  );
}
