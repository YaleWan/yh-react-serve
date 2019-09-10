'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/findAllMenu',controller.menu.findAllmenu)
  router.post('/findButtons',controller.button.findButtons)

};
