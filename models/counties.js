module.exports = (sequelize, Sequelize) => {
    const Counties = sequelize.define('counties', {
        name: {
            type: Sequelize.STRING
        },
        population: {
            type: Sequelize.INTEGER
        },
        countyCode: {
            type: Sequelize.INTEGER
        }
    });
    return Counties;
}