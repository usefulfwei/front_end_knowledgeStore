function travel(dir,callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname = path.join(dir,file);

		if(fs.statSync(pathname).isDirectory())
//遇到一个子目录时，就先接着遍历子目录
		{
			travel(pathname,callback);
		}else{
			callback(pathname);
//遇到一个文件时，就把文件的绝对路径传给回调函数。
//回调函数拿到文件路径后，就可以做各种判断和处理			
		}
	})
}