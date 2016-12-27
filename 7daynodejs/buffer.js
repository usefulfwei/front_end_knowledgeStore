var bin = new Buffer([0x68, 0x6a, 0x6c, 0x6f]);
//Buffer与字符串类似，除了可以用.length属性得到字节长度外，
//还可以用[index]方式读取指定位置的字节，
bin[0]
//二进制数据转化为字符串
var str = bin.toString('utf-8');
//字符串转换为指定编码下的二进制数据
var bin2 = new Buffer('hello','utf-8');
/*Buffer与字符串有一个重要区别。字符串是只读的，
并且对字符串的任何修改得到的都是一个新字符串，
原字符串保持不变。至于Buffer，
更像是可以做指针操作的C语言数组。
例如，可以用[index]方式直接修改某个位置的字节。*/
bin[0] = 0x48;


/*也因此，如果想要拷贝一份Buffer，
得首先创建一个新的Buffer，
并通过.copy方法把原Buffer中的数据复制过去。
这个类似于申请一块新的内存，并把已有内存中的数据复制过去*/
var bin3 = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var dup = new Buffer(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>