module.exports.login = (req, res) => {
  // TODO: Create login controller logic
  res.status(200).json({ status: 'ok', route: '/api/auth/login', controller: true });
}

module.exports.registration = (req, res) => {
  // TODO: Create registration controller logic
  res.status(200).json({ status: 'ok', route: '/api/auth/registration', controller: true });
}
