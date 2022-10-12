module.exports = (sequelize, DataTypes) => {
    const coffee = sequelize.define('coffee', {
        
        name: DataTypes.STRING,
        Category: DataTypes.STRING,
        price: DataTypes.STRING,
        pictures: DataTypes.STRING,
    })
    return coffee
}