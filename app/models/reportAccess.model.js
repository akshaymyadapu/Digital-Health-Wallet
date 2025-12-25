module.exports = (sequelize, Sequelize) => {
    const ReportAccess = sequelize.define("report_access", {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reportId: {
        type: Sequelize.INTEGER
    },
    sharedWithUserId: {
        type: Sequelize.INTEGER
    },
    accessType: {
        type: Sequelize.STRING // READ_ONLY
    }
    });

    return ReportAccess;
};
