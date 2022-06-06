module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'ca-central-1',
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'it@moocads.com',
        defaultReplyTo: 'it@moocads.com',
        testAddress: 'it@moocads.com',
      },
    },
  },
});
