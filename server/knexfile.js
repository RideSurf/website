module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/ridesurf'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
