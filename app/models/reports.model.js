module.exports = (sequelize, Sequelize) => {
    const Reports = sequelize.define("reports", {
        id: {
            type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER
    },
    reportType: {
        type: Sequelize.STRING
    },
    filePath: {
        type: Sequelize.STRING
    },
    associatedVitals: {
        type: Sequelize.STRING
    },
    reportDate: {
        type: Sequelize.DATE
    }
    });

    return Reports;
};
