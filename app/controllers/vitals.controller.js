const db = require("../models");
const Vitals = db.vitals;
const { Op } = db.Sequelize;

exports.addVitals = async (req, res) => {
    try {
        const { type, value, recordedAt } = req.body;

        const vitals = await Vitals.create({
            userId: req.userId,
            type,
            value,
            recordedAt
        });

        return res.status(201).json(vitals);
    } catch (error) {
        return res.status(500).json({ message: "Failed to add vitals" });
    }
};

exports.getVitals = async (req, res) => {
    try {
        const { type, from, to } = req.query;

        const condition = { userId: req.userId };

    if (type) condition.type = type;

    if (from && to) {
        condition.recordedAt = {
            [Op.between]: [new Date(from), new Date(to)]
        };
    }

    const vitals = await Vitals.findAll({
        where: condition,
        order: [["recordedAt", "ASC"]]
    });

    return res.status(200).json(vitals);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch vitals" });
    }
};
