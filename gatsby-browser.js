const React = require("react");
const Layout = require("./src/components/Layout").default;
const Footer = require("./src/components/Footer").default;
const MessengerChat = require("./src/components/MessengerChat").default;

exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>
            {element}
            <MessengerChat />
            <Footer />
        </Layout>
    );
};
