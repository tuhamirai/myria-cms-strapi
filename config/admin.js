module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '57ca7c1f45052c6f033443482c586a77'),
  },
});
