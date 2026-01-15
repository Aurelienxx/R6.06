import { db } from "../db.js"; // assure-toi que db.js est aussi en ES Module

// CREATE USER
export const createUser = (req, res) => {
    const { userName, userPWD } = req.body;
    if (!userName || !userPWD) {
        return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    db.query(
        "INSERT INTO UserTable (userName, userPWD) VALUES (?, ?)",
        [userName, userPWD],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Utilisateur créé", userID: result.insertId });
        }
    );
};

// READ ALL USERS
export const getAllUsers = (req, res) => {
    db.query("SELECT * FROM UserTable", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// READ ONE USER
export const getUserById = (req, res) => {
    const userID = req.params.id;
    db.query("SELECT * FROM UserTable WHERE userID = ?", [userID], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.json(result[0]);
    });
};

// UPDATE USER
export const updateUser = (req, res) => {
    const userID = req.params.id;
    const { userName, userPWD } = req.body;

    const updates = [];
    const params = [];

    if (userName) { updates.push("userName = ?"); params.push(userName); }
    if (userPWD) { updates.push("userPWD = ?"); params.push(userPWD); }

    if (updates.length === 0) return res.status(400).json({ message: "Rien à mettre à jour" });

    const query = `UPDATE UserTable SET ${updates.join(", ")} WHERE userID = ?`;
    params.push(userID);

    db.query(query, params, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Utilisateur mis à jour" });
    });
};

// DELETE USER
export const deleteUser = (req, res) => {
    const userID = req.params.id;
    db.query("DELETE FROM UserTable WHERE userID = ?", [userID], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Utilisateur supprimé" });
    });
};
