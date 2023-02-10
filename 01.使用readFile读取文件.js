//导入FS模块,来操作文件
const fs = require('fs')

fs.readFile(
    './files/1.txt',
    'utf8',
    function(err,result){
        if(err){
            return console.log('文件读取失败：'+err.message)
        }
        console.log('文件读取成功：',result)
        
    }
)
