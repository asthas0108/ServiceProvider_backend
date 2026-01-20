const NotificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: String,
  message: String,

  isRead: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now }
});
