const messages = []; // In-memory message store

exports.sendMessage = (req, res) => {
  const { sender, receiver, message } = req.body;

  if (!sender || !receiver || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newMessage = {
    sender,
    receiver,
    message,
    timestamp: new Date().toISOString()
  };

  messages.push(newMessage);
  res.status(201).json({ message: 'Message sent', data: newMessage });
};

exports.getMessages = (req, res) => {
  res.status(200).json(messages.slice(-100)); // return last 100 messages
};
