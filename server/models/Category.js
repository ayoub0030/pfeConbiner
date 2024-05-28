//good
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
    }
    });
    
    Category.associate = (models) =>{
      Category.hasMany(models.Subcategory,{
      oneDelete: "CASCADE"
      });
    };
  return Category;
};