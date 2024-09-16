const Booking = require('../models/Booking');

// Create a new booking
const createBooking = async (req, res) => {
  const { mentorId, menteeId, date } = req.body;

  // Create a new booking
  const booking = new Booking({
    mentor: mentorId,
    mentee: menteeId,
    date,
  });

  await booking.save();

  res.status(201).json({
    message: 'Booking created successfully',
    booking,
  });
};

module.exports = { createBooking };
