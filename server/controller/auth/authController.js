const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { users, patients } = require("../../database/connection");
const sendEmail = require("../../services/sendEmail");
const dotenv = require("dotenv").config();

exports.registerUser = async (req, res, next) => {
  try {
    const {
      userName,
      email,
      password,
      firstName,
      lastName,
      address,
      age,
      phoneNumber,
    } = req.body;
    if (
      !userName ||
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !address ||
      !age ||
      !phoneNumber
    ) {
      return res.json({ message: "All filed is require" });
    }
    const userExist = await users.findOne({ where: { email } });
    if (userExist) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // user table insert
    const newUser = await users.create({
      userName,
      email,
      role: "patient",
      password: bcrypt.hashSync(password, 12),
    });
    // patient table insert
    const userData = await patients.create({
      user_id: newUser.id,
      firstName,
      lastName,
      address,
      age,
      phoneNumber,
    });
    await sendEmail({
      email: email,
      subject: "Hospital Management System - Registration Successfully ",
      message: `Dear User,

Welcome to the Hospital Management System!

Your registration has been successfully completed. You can now log in and access all available features.

If you did not register for this account, please contact our support team immediately.

Thank you,  
Hospital Management System Team`,
    });
    res.json({ message: "Added New Patient Succssfully", data: userData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "insert failed " });
  }
};

// login code
exports.loginUser = async (req, res, next) => {
  try {
    const { email, role, password } = req.body;
    if (!email || !role || !password) {
      return res.json({ message: "Please provide email,role and passsword" });
    }
    // check email user exits or not
    const userFound = await users.findOne({
      where: { email, role },
    });
    if (!userFound) {
      return res.json({ message: "Email or role not registered" });
    }
    // password check
    const isMatched = bcrypt.compareSync(password, userFound.password);
    if (isMatched) {
      const token = jwt.sign({ id: userFound.id }, process.env.SECRETKEY, {
        expiresIn: "30d",
      });
      return res.json({ message: "User Logged successfully!", token });
    } else {
      return res.json({ message: "Invalid user" });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "Error login" });
  }
};

// forgot password
exports.forgetpassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ message: "please provide email" });
    }
    // check email user exits or not
    const userExist = await users.findOne({
      where: { email },
    });
    if (!userExist) {
      return res.json({ message: "Email not registered" });
    }
    // opt send
    const otp = Math.floor(10000 + Math.random() * 90000);
    userExist.otp = otp;
    userExist.otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    await userExist.save();
    await sendEmail({
      email: email,
      subject: "Hospital Management System - Password Reset OTP ",
      message: `Dear User,
We received a request to reset your password for your Hospital Management System account.

Your One-Time Password (OTP) is: ${otp}

Please enter this OTP in the application to proceed with resetting your password. This OTP is valid for 5 minutes only. If you did not request a password reset, please ignore this message.

Thank you,
Hospital Management System Team`,
    });
    return res.json({ message: "Email Sent successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something Wrong" });
  }
};

// verify otp
exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.json({ message: "Please provide email, otp" });
    }
    // check otp or email correct or not
    const userExist = await users.findOne({ where: { email } });
    if (!userExist) {
      return res.json({ message: "email is not registered " });
    }
    if (userExist.otp !== Number(otp)) {
      return res.json({ message: "Inavlid otp" });
    }
    if (userExist.otpExpires <= new Date()) {
      return res.json({ message: "Otp has expired" });
    } else {
      // dispost the otp so cannot be used next time the same opt
      userExist.otp = null;
      userExist.otpExpires = null;
      await userExist.save();
      return res.json({ message: "otp is correct" });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "something error" });
  }
};

// resetPassword
exports.resetPassword = async (req, res, next) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;
    if (!email || !newPassword || !confirmPassword) {
      return res.json({
        message: "please provide email, newpasword and confrim password",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.json({
        message: "newpassword and confirm password doesn't match",
      });
    }
    const userExist = await users.findOne({ where: { email } });
    if (!userExist) {
      res.json({ message: "user email not registerd" });
    }
    userExist.password = bcrypt.hashSync(newPassword, 12);
    await userExist.save();
    res.json({ message: "Password changed successfully!" });
  } catch (err) {
    console.log(err);
    res.json({ message: "Something error" });
  }
};
