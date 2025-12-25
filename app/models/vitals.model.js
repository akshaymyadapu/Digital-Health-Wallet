module.exports = (sequelize, Sequelize) => {
    const Vitals = sequelize.define("vitals", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    userId: {
        type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.STRING // BP, Sugar, Heart Rate
    },
    value: {
        type: Sequelize.STRING
    },
    recordedAt: {
        type: Sequelize.DATE
    }
    });

    return Vitals;
};
