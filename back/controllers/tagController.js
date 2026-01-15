import { db } from "../db.js";

// CREATE TAG
export const createTag = (req, res) => {
    const { tagName } = req.body;
    if (!tagName) return res.status(400).json({ message: "Nom du tag obligatoire" });

    db.query(
        "INSERT INTO TagsTable (tagName) VALUES (?)",
        [tagName],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Tag créé", tagID: result.insertId });
        }
    );
};

// READ ALL TAGS
export const getAllTags = (req, res) => {
    db.query("SELECT * FROM TagsTable", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// READ SINGLE TAG
export const getTagById = (req, res) => {
    const tagID = req.params.id;
    db.query(
        "SELECT * FROM TagsTable WHERE tagID = ?",
        [tagID],
        (err, result) => {
            if (err) return res.status(500).json(err);
            if (result.length === 0) return res.status(404).json({ message: "Tag non trouvé" });
            res.json(result[0]);
        }
    );
};

// UPDATE TAG
export const updateTag = (req, res) => {
    const tagID = req.params.id;
    const { tagName } = req.body;
    if (!tagName) return res.status(400).json({ message: "Nom du tag obligatoire" });

    db.query(
        "UPDATE TagsTable SET tagName = ? WHERE tagID = ?",
        [tagName, tagID],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Tag mis à jour" });
        }
    );
};

// DELETE TAG
export const deleteTag = (req, res) => {
    const tagID = req.params.id;
    db.query(
        "DELETE FROM TagsTable WHERE tagID = ?",
        [tagID],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: "Tag supprimé" });
        }
    );
};
