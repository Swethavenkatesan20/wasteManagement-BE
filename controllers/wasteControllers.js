const Waste = require('../models/waste');

const wasteController = {
  // to create a new service
  createWaste: async (req, res) => {
    try {
      const { name, category, credit, description } = req.body;
      console.log('Creating waste with data:', { name, category, credit, description });

      const newWaste = new Waste({ name, category, credit, description });
      await newWaste.save();

      res.status(201).json({ message: 'waste created', data: newWaste });
    } catch (error) {
      console.error('Error creating waste:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // Controller to get all services
  getAllWaste: async (req, res) => {
    try {
      const wastes = await Waste.find();
      res.status(200).json({ success: true, data: wastes });
    } catch (error) {
      console.error('Error fetching wastes:', error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = wasteController;
