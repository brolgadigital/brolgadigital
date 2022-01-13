const React = require("react")
const Layout = require("./src/components/Layout").default
const MessengerChat = require ("./src/components/MessengerChat").default

exports.wrapPageElement = ({ element, props }) => {
    return (
        <>
            {element}
            <MessengerChat />
        </>
    )
}