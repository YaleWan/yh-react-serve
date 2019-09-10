"use strict";

const Controller = require("egg").Controller;

class MenuController extends Controller {
  async findAllmenu() {
    const { ctx } = this;
    const menu = await ctx.service.menu.findAllMenu()
    ctx.body = menu
  }
}

module.exports = MenuController;
