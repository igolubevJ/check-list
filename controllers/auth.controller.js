module.exports.login = (req, res) => {
  const { email, password } = req.body;
  
  console.log(`👨 (${email}) has password: ${password}`);

  // TODO: Create login controller logic
  res.status(200).json({ status: 'ok', route: '/api/auth/login', controller: true });
}

module.exports.registration = (req, res) => {
  const { email, password } = req.body;
  console.log(`👨 (${email}) register with password: ${password}`);

  // TODO: Create registration controller logic
  res.status(200).json({ status: 'ok', route: '/api/auth/registration', controller: true });
}
