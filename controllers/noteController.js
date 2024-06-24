const Note = require('../models/Note');

// POST /api/notes
exports.createNote = async (req, res) => {
  try {
    const { title, content, category } = req.body;

    // Création de la note
    const newNote = new Note({
      title,
      content,
      category,
      user: req.user.id // Supposant que vous avez un système d'authentification avec JWT
    });

    // Enregistrement dans la base de données
    const savedNote = await newNote.save();

    // Réponse HTTP avec succès
    res.status(201).json({ note: savedNote });
  } catch (err) {
    // Gestion des erreurs
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


// Récupérer toutes les notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Mettre à jour une note par son ID
exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    let note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    note.title = title;
    note.content = content;

    await note.save();

    res.json({ msg: 'Note updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

