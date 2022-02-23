import path from 'path'
import fs from 'fs'
import express from 'express'
const client=path.join(__dirname,"../../../client")
const templateDirectory=path.join(__dirname,"../../../client/templates")

var availableTemplates=[]
fs.readdir(templateDirectory,(err,files)=>{
    files.forEach(file=>{
        availableTemplates.push(file.split(".")[0])
    })
})


const templateRoutes = (app) => {
  app.use(express.static(client));

  
  app.get("/", function (req, res) {
           res.sendFile(path.join(templateDirectory,"index.html"));
    });

    app.get("/:page", function (req, res) {
            
           const page=req.params.page.split(".")[0]
           const extension=req.params.page.split(".")[1]

           if(extension==="html"){
                res.redirect(page)
           }
           else if(extension){
            res.sendFile(path.join(templateDirectory,"404.html"))
           }
           else if(availableTemplates.includes(page)){
                res.sendFile(path.join(templateDirectory,`${page}.html`))

           }
           else{
                res.sendFile(path.join(templateDirectory,"404.html"))
           }
    });

};
export default templateRoutes;
