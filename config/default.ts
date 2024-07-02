import dotenv from 'dotenv';
dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
  },

  db: {
    database_url: process.env.DATABASE_URL,
  },
};
