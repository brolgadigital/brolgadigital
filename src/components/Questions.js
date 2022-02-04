import React from "react";

export default function Questions(props, i) {
    const openDrawer = (trigger) => {
        if (trigger.classList.contains("question")) {
            trigger.classList.add("openQ");
        } else {
            trigger.parentElement.classList.add("openQ");
        }
    };
    const closeDrawer = (open) => {
        if (open.length > 0) {
            for (let i = 0; i < open.length; i++) {
                const element = open[i];
                element.classList.remove("openQ");
            }
        }
    };

    const toggleFAQ = (e) => {
        let trigger = e.target;
        let open = document.getElementsByClassName("openQ");

        if (open.length === 0) {
            openDrawer(trigger);
        } else if (
            trigger.classList.contains("openQ") ||
            trigger.parentElement.classList.contains("openQ")
        ) {
            closeDrawer(open);
            console.log("clicked");
        } else if (open.length > 0) {
            closeDrawer(open);
            openDrawer(trigger);
        } else {
            closeDrawer(open);
        }
    };

    return (
        <div
            className="question"
            onClick={toggleFAQ}
            onKeyDown={toggleFAQ}
            role="button"
            tabIndex={i}
        >
            <h4>{props.q}</h4>
            <p>{props.a}</p>
        </div>
    );
}
