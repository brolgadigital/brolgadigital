import React, { useEffect } from 'react'

const MessengerChat = () => {
    useEffect(() => {
        window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v12.0'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    })
    
    return (
        <>
            <div id="fb-root"></div>
            <div
                className="fb-customerchat"
                attribution="biz_inbox"
                page_id="1672886679597400"
            />
        </>
    )
}


export default MessengerChat
