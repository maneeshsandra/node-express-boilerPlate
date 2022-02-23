
  import { sampleController } from "../controllers/sample";
  
  
  const sampleRoutes = (app) => {
   
    //these are various types of routes you can use

    // 1.app.route("/yourRoute").post(yourController);
  
    //2. app.post("/yourRoute", yourController);
   
    /* this is a dynamic route whatever you pass after /yourRoute will be treated as id
        and will send you to this route */
    
    //app.get("/yourRoute/:id", yourController);


    app.get("/add",sampleController)
  
  };
  
  export default sampleRoutes;
  