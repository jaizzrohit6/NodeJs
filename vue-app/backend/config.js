require("dotenv").config();

module.exports = {
  app: {
    port: process.env.PORT || 5000,
  },
  db: {
    uri: process.env.MONGO_URI || "mongodb://localhost:27017/vue-db"
  },
  jwt: {
    secret: process.env.JWT_SECRET || "defaultsecret",
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  },
};
