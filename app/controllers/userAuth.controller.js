const db = require("../models");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 8);

        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            role: "OWNER"
        });

        return res.status(201).json({
            message: "Account created successfully",
            userId: user.id
        });
    } catch (error) {
        return res.status(500).json({ message: "Registration failed" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || "health-wallet-secret",
            { expiresIn: "24h" }
        );

        return res.status(200).json({
            token,
            user: {
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Login failed" });
    }
};
