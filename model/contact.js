const mongoose = require('mongoose');

const contact = mongoose.Schema(
  {
    primaryContactId: { type: Number },
    emails: { type: [String] },
    phoneNumbers: { type: [String] },
    secondaryContactIds: { type: [Number] } || null,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contact);
module.exports = Contact;
