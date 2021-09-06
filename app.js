const cron = require('node-cron')
let shell = require('shelljs')

cron.schedule('* * * * * *', function(){
    console.log('Schedule running...')
    // if(shell.exec("dir").code !==0){
    //     console.log("something gone wrong")
    // }
})