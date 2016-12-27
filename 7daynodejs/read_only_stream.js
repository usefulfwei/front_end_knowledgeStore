var rs = fs.createReadStream(pathname);

rs.on('data',function(chunk)){
	//do something with chunk
}

rs.on('end',function(){
	cleanUp();
})