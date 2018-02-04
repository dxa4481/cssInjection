navigator.serviceWorker.addEventListener("message", receiveMessage);
function receiveMessage(event){
    console.log("got message");
    if (event.origin !== "http://localhost:8000")
        return;
    localStorage.setItem("csrfToken", event.data);
}
