const { initAuth0Authentication, initAuth0TeamManagement, initAuth0Credential } = require('@astral-dx/plugin-auth0');
const { initReferences } = require("@astral-dx/plugin-references");
const { initBrand } = require("@astral-dx/plugin-branding");

/** @type {import('@astral-dx/core').Reference[]} */
const references = [
  /*
   * References are helpful links for your developers, you should include things like:
   * - API Documentation
   * - Change Log
   * - Code Examples
   * - FAQs
   * - Roadmap
   * - System Status
   * - Support/Contact
   * 
   * Use icons ligatures from the Material Icon Font: https://fonts.google.com/icons
   * ex. "Chevron Right" would be "chevron_right"
   */
  {
    url: 'https://docs.github.com',
    label: 'Documentation',
    description: 'Learn about how to use GitHub, wherever you are on your GitHub journey.',
    icon: 'book',
  },
];

/** @type {import('@astral-dx/core').Brand} */
const brand = {
  /*
   * Set your brand to customize your API Portal's colors, logos, and title.
   * 
   * - logoSrc and faviconHref can be URLs or base64 encoded images
   * - primaryColor and secondaryColor should be valid hex color codes
   * - title and subtitle are used for your portal's title and web metadata
   */
  logoSrc: '/astral.svg',
  faviconHref: '/astral.svg',
  primaryColor: '#604bd5',
  secondaryColor: '#aa31d1',
  title: 'My API Portal',
  subtitle: 'Welcome to my API Portal!',
}

/** @type {import('@astral-dx/core').PortalConfig} */
const portalConfig = {
  /*
   * Your portal config provides implementation for the interface 
   * that drives the portal API and UI:
   * - authencation provides user authencation
   * - teamManagement provides user-grouping and invitations
   * - credential provides your API credentials for your API
   * - branding provides your name, colors, and logos to the UI
   * - references provides helpful links for your developers in the UI
   */
  plugin: {
    authentication: initAuth0Authentication(),
    teamManagement: initAuth0TeamManagement(),
    credential: initAuth0Credential({ audiences: [ 'https://my-api-audence' ] }),
    branding: initBrand(brand),
    references: initReferences(references),
  },
};

module.exports = portalConfig;