const Share = require('../models/Share');

// Créer un partage
exports.createShare = async (req, res) => {
  try {
    const { note, sharedWith, permission } = req.body;
    const newShare = new Share({ note, sharedWith, permission });
    await newShare.save();
    res.status(201).json(newShare);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir tous les partages
exports.getAllShares = async (req, res) => {
  try {
    const shares = await Share.find().populate('note').populate('sharedWith');
    res.status(200).json(shares);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir un partage par ID
exports.getShareById = async (req, res) => {
  try {
    const share = await Share.findById(req.params.id).populate('note').populate('sharedWith');
    if (!share) {
      return res.status(404).json({ message: 'Share not found' });
    }
    res.status(200).json(share);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un partage
exports.updateShare = async (req, res) => {
  try {
    const { permission } = req.body;
    const share = await Share.findByIdAndUpdate(req.params.id, { permission }, { new: true });
    if (!share) {
      return res.status(404).json({ message: 'Share not found' });
    }
    res.status(200).json(share);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un partage
exports.deleteShare = async (req, res) => {
  try {
    const share = await Share.findByIdAndDelete(req.params.id);
    if (!share) {
      return res.status(404).json({ message: 'Share not found' });
    }
    res.status(200).json({ message: 'Share deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
