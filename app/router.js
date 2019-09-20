'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/findAllMenu',controller.menu.findAllmenu)
  router.post('/findButtons',controller.button.findButtons)
  router.post('/handleUser',controller.user.handleUser)
  router.post('/findUser',controller.user.findUser)
  router.post('/delUser',controller.user.delUser)
  router.post('/handleMenu',controller.menu.handleMenu)
  router.post('/delMenu',controller.menu.delMenu)
  router.post('/handleButton',controller.button.handleButton)
  router.post('/delButton',controller.button.delButton)
  router.post('/handleRole',controller.role.handleRole)
  router.post('/findRole',controller.role.findRole)
  router.post('/delRole',controller.role.delRole)

};
