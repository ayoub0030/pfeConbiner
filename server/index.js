const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

//ROUTERS
const usersRouter = require("./routes/UsersRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const categoryRoutes = require("./routes/categoriesRoutes");
const SubcategoryRoutes = require("./routes/subcategoriesRoutes");
const reclamationRoutes = require("./routes/reclamationRoutes"); // Import des routes de réclamation
const commentRoutes = require("./routes/commentRoutes");

app.use("/api/users", usersRouter);
app.use("/api", serviceRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", SubcategoryRoutes);
app.use("/api/reclamations", reclamationRoutes); // Utilisation des routes de réclamation
app.use("/api/comments", commentRoutes); // Utilisation des routes de commentaire
db.sequelize.sync({alter:true}).then(() => {
  app.listen(3003, () => {
    console.log("server running");
  });
});
