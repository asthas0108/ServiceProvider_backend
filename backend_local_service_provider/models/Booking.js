const BookingSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  serviceCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory"
  },

  bookingDate: { type: Date, required: true },
  timeSlot: {
    startTime: String,
    endTime: String
  },

  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  },

  address: String,

  createdAt: { type: Date, default: Date.now }
});
