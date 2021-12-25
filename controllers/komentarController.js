import komentars from "../models/komentar.js";
export const getkomentars = async(req, res) => {
        try {
            const komentar = await komentars.find();
            res.status(200).json(komentar);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    //get By ID
export const getkomentarsID = async(req, res) => {
        try {
            const komentar = await komentars.findById(req.params.id);
            res.status(200).json(komentar);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    //create komentar
export const savekomentars = async(req, res) => {
        const komentar = new komentars(req.body);
        try {
            const ressave = await komentar.save();
            res.status(201).json(ressave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    //update komentar
export const updatekomentars = async(req, res) => {
        var komentarID = await komentars.findById(req.params.id);
        if (!komentarID) return res.status(404).json({ status: false, message: "Data Not Found" });
        try {
            const ressave = await komentars.updateOne({ _id: req.params.id }, { $set: req.body });
            res.status(200).json(ressave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    //delete komentar
export const deletekomentars = async(req, res) => {
    var komentarID = await komentars.findById(req.params.id);
    if (!komentarID) return res.status(404).json({ status: false, message: "Data Not Found" });
    try {
        const ressave = await komentars.deleteOne({ _id: req.params.id });
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}