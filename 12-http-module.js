const http =  require('http')

const server = http.createServer((req, res)=>{
//create server accepts 2 parameter both are object
//req = incoming req=> eg: client is requesting from web browser your web page, so u will have information about method and kind of usefull stuff in request object
//res = outgoing => what we are sending back
if(req.url === '/'){
    res.write("Hello there, This is Home page")
    res.end()
}else if(req.url === '/about'){
    res.end("this is about page")
}
else {
    res.end(`<h1>Oops!</h1>
<p>We can't sem to find the page you are looking for </p>
<a href="/">back to Home</a>
`)
}
})

server.listen(8081)