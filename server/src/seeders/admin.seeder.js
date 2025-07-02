const bcrypt = require("bcryptjs");
const adminSeeder = async (db) => {
  try {
    // check admin exists xa ki  nai
    const isAdminExists = await db.users.findOne({
      where: {
        email: "admin123@gmail.com",
      },
    });
    if (!isAdminExists) {
      // admin seeding data
      await db.users.create({
        userName: "admin",
        email: "admin123@gmail.com",
        role: "admin",
        password: bcrypt.hashSync("admin", 10),
      });
      console.log("admin seeding data successfully");
    } else {
      console.log("admin already seeding ");
    }
  } catch (err) {
    console.log(err.message);
    console.log("something wrong");
  }
};
module.exports = adminSeeder;
