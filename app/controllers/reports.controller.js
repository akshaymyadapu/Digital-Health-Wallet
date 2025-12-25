const ReportAccess = db.reportAccess;

exports.shareReport = async (req, res) => {
    try {
        const { reportId, sharedWithUserId } = req.body;

        const access = await ReportAccess.create({
            reportId,
            sharedWithUserId,
            accessType: "READ"
        });

    res.status(201).json(access);
    } catch (error) {
        res.status(500).json({ message: "Failed to share report" });
    }
};
