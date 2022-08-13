/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://tristandida.fr",
  generateRobotsTxt: true,
};

module.exports = config;
