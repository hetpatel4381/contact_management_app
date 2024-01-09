// @desc Get ALl Contacts
// @route GET /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get All Contacts" });
  // res.json({message: "Get All Contacts"});
  // res.send("Get All Contacts");
};

// @desc Create New Contacts
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

// @desc Get Contact
// @route GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
};

// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
};

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
