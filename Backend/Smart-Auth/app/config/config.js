
module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: 8081,
  
    /** DATABASE */
    db: {
      DB_HOST: process.env.DATABASE_HOST,
      DB_USER: process.env.DATABASE_USER,
      DB_PASS: process.env.DATABASE_PASSWORD,
      DB_NAME: process.env.DATABASE_NAME,
      dialect: "mysql",
      define: {
        timestamps: false
      }
    },
  
  };