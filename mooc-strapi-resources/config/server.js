module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['uDXtr92m+9ye2/1xO+fI+Q==', 'ioQokU/zGUxAGF4T+I2VZQ==', 'fwpuOvpt0bauLeonslyJpQ==', 'Ulk1loUwiSgc7Q5eMLnWhw==']),
  },
});
