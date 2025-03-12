import { createServer } from "http";
import fs from "fs";
const server = createServer();
const port = 8080;


function readFunction(status, path, res, filetype) {
    try {
        let content = fs.readFileSync(path, 'utf-8');
        res.writeHead(status, { 'Content-Type': filetype });
        if (filetype == 'text/html') {
            content += `
            <nav>
                    <a href="/" class="nav-link">Home</a>
                    <a href="/about" class="nav-link">About</a>
                    <a href="/contact" class="nav-link">Contact</a>
                </nav>
        
        `
        }
        res.end(content);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("<h1>iInternal Server Error</h1>");
    }
}


server.on('request', (request, res) => {
    let myUrl = request.url.split("/");
    console.log(myUrl);
    switch (myUrl[1]) {
        case "":
            readFunction(200, "/home/omarfouad/ITI/labs/nodeJs/lab1/home.html", res, "text/html");
            break;
        case "style":
            readFunction(200, "/home/omarfouad/ITI/labs/nodeJs/lab1/style.css", res, "text/css");
            break;
        case "contact":
            readFunction(200, "/home/omarfouad/ITI/labs/nodeJs/lab1/contact.html", res, "text/html");
            break;
        case "about":
            readFunction(200, "/home/omarfouad/ITI/labs/nodeJs/lab1/about.html", res, "text/html");
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("<h1>page not found!</h1>");


    }


});

server.listen(port, () => {
    console.log(`port running in port ${port}`);

});