const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findSlug(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.services['virtual-card'].findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models['virtual-card'] });
  },
};