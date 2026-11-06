const hazel = require(".");

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  NOW_URL,
  PROXY: proxy
} = process.env;

const url = NOW_URL || PRIVATE_BASE_URL;

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url,
  proxy
});
