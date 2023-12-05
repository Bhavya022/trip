const Tutor = require('../models/tutor');
const DoubtRequest = require('../models/doubtRequest');

const TutorController = {};

TutorController.getAvailableTutors = async (req, res) => {
  try {
    const currentTime = new Date();

    // Extract classGrade and subject from request query parameters
    const { classGrade, subject } = req.query;

    // Validate query parameters
    if (!classGrade || !subject) {
      return res.status(400).json({ message: 'Missing required query parameters' });
    }

    // Filter tutors based on current time, available status, class grade, and subject 
    console.log(await Tutor.find()) 
    const availableTutors = await Tutor.findAll({
      availability: true,
      classGrade: classGrade,
      subjects: { $in: [subject] }, // Use $in for array containment check
    });

    res.json({
      message: 'Available tutors retrieved successfully',
      tutors: availableTutors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

TutorController.assignDoubt = async (req, res) => {
  const { doubtId, tutorId } = req.body;

  try {
    const doubtRequest = await DoubtRequest.findById(doubtId);
    if (!doubtRequest) {
      return res.status(404).json({ message: 'Doubt request not found' });
    }

    const tutor = await Tutor.findById(tutorId);
    if (!tutor || !tutor.availability) {
      return res.status(401).json({ message: 'Unauthorized to assign doubt' });
    }

    doubtRequest.assignedTutorId = tutorId;
    await doubtRequest.save();

    res.json({ message: 'Doubt assigned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = TutorController;
