'use strict';

/**
 * Cafeterias.js controller
 *
 * @description: A set of functions called "actions" for managing `Cafeterias`.
 */

module.exports = {

  /**
   * Retrieve cafeterias records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.cafeterias.search(ctx.query);
    } else {
      return strapi.services.cafeterias.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a cafeterias record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.cafeterias.fetch(ctx.params);
  },

  /**
   * Count cafeterias records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.cafeterias.count(ctx.query, populate);
  },

  /**
   * Create a/an cafeterias record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.cafeterias.add(ctx.request.body);
  },

  /**
   * Update a/an cafeterias record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.cafeterias.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an cafeterias record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.cafeterias.remove(ctx.params);
  }
};
