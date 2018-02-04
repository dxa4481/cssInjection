navigator.serviceWorker.addEventListener("message", receiveMessage);
function receiveMessage(event){
    console.log("got message");
    if (event.origin !== "https://security.love")
        return;
    localStorage.setItem("csrfToken", event.data);
}
