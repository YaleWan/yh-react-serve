'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/findAllMenu',controller.menu.findAllmenu)
  router.post('/findButtons',controller.button.findButtons)
  router.post('/addUser',controller.user.addUser)
  router.post('/findUser',controller.user.findUser)
  router.post('/delUser',controller.user.delUser)

};
