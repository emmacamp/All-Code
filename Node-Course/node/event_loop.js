const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        return res.end('Home')
    } else if (req.url === '/about') {
        for (let i = 0; i < 100000; i++) {
            console.log((Math.random() * i).toFixed(2))

        }
        return res.end('About')
    }

    return res.end('Hello world')
})


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})