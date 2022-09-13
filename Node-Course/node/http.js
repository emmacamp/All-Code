const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello Node');
        return res.end();
    } else if (req.url === '/node') {
        res.write('Hello EndPoint');
        return res.end();
    }


    res.write('Not found');
    res.end();
})

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});