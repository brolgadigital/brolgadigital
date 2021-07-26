export default function SenderList(props) {
    const url = new URL(
        "https://api.sender.net/v2/subscribers"
    );

    let headers = {
        "Authorization": `Bearer ${process.env.GATSBY_SENDER_API_TOKEN}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    let data = {
        "email": `${props.email}`,
        "firstname": `${props.firstName}`,
        "lastname": `${props.lastName}`,
        "groups": ["boQ4Ej"],
    };

    fetch(url, {
        method: "POST",
        headers,body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(body => {
        console.log(`response from API:`, body)
    })

}