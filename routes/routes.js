var appRouter = function (app) {
    var user = [];
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });

    app.post("/registerUser", function (req, res) {
        user.push(req.body);
        res.status(201).send({
            message: "User created",
            status: "Success!"
        })
    });

    app.get("/user/:id", function (req, res) {
        
    })
  }
  
  module.exports = appRouter;
  