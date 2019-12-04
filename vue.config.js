module.exports={
    lintOnSave:false,
    devServer:{
        before(app){
            app.get('/getlist',(req,res)=>{
                let data=require('./src/mock/data.json')
                res.send(data)
            })
        }
    }
}