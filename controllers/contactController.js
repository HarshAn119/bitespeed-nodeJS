const asyncHandler = require('express-async-handler');
const Contact = require('../model/contact');

const contactRegister = asyncHandler(async (req, res) => {
  const { email, number } = req.body;

  let id = Math.floor(Math.random() * 100);
  flagEmail = false;
  let data = await Contact.findOne({ phoneNumbers: number });
  if (data == null) {
    data = await Contact.findOne({ emails: email });
    flagEmail = true;
  }
  if (data) {
    data?.secondaryContactIds?.push(id);
    flagEmail ? data?.phoneNumbers?.push(number) : data?.emails?.push(email);
    let updateData = await Contact.findOneAndUpdate(
      { primaryContactId: data?.primaryContactId },
      { $set: data }
    );
    updateData = await Contact.findOne({
      primaryContactId: data?.primaryContactId,
    });

    res.send(updateData);
  } else {
    const contact = await Contact.create({
      primaryContactId: id,
      emails: email,
      phoneNumbers: number,
    });
    res.send(contact);
  }
});

module.exports = { contactRegister };
