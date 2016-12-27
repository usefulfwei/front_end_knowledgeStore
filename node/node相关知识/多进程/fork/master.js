/**
 * Created by jwdn on 2016/12/3.
 */
const fs = require('fs');
const child_process = require('child_process');

for(var i=0;i<3;i++) {
  var work_process = child_process.fork("support.js",[i]);

  work_process.on('close',function(code) {
    console.log('子进程已退出，退出码'+code);
  });
}