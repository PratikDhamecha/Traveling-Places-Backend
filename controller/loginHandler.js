const User = require("../model/User");
const handleLogin = async (req, res) => {
  
    const { username, password } = req.body;
    
    console.log(req.body);
    if (!username || !password) {
      return res
        .send({ message: "Username and Password are required" });
    }
    
    const data = await User.findOne({ userName: username }).exec();
    
    if (username != data.userName) {
      return res.status(401).json({ message: "User not found" });
    }
  
    if (username == data.userName && password == data.password) {
        res.json({ success: true, message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Incorrect Password" });
    }
  };

module.exports = handleLogin;
  