module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: 8081,
  
    /** DATABASE */
    db: {
      DB_HOST: 'hackathon_db_1',
      DB_USER: 'root',
      DB_PASS: 'root',
      DB_NAME: 'hackathon',
      dialect: "mysql",
      define: {
        timestamps: false
      }
    },
  
  };