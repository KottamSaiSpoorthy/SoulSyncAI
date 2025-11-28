async function sendMessage() {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await res.json();
    console.log(data.reply);

    // Show reply on UI
}
