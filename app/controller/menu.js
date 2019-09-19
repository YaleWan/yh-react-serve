"use strict";

const Controller = require("egg").Controller;

class MenuController extends Controller {
  async findAllmenu() {
    const { ctx } = this;
    const menu = await ctx.service.menu.findAllMenu()
    ctx.body = menu
  }
  async handleMenu() {
    const { ctx } = this;
    const [menuInfo, type,id] = ctx.request.body;
    if (type == 1) {
      const data = await ctx.service.menu.editMenu(menuInfo,id)
      if (data) {
        ctx.body = {
          code: 200,
          message: "修改成功"
        };
      } else {
        ctx.body = {
          code: -1,
          message: "修改失败"
        };
      }
    } else {
      const data = await ctx.service.menu.addMenu(menuInfo);
      if (data) {
        ctx.body = {
          code: 200,
          message: "新增成功"
        };
      } else {
        ctx.body = {
          code: -1,
          message: "新增失败"
        };
      }
    }
  }
  async delMenu() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    const data = await ctx.service.menu.delMenu(id);
    if (data) {
      ctx.body = {
        code: 200,
        message: "删除成功"
      };
    } else {
      ctx.body = {
        code: -1,
        message: "删除失败"
      };
    }
  }
}

module.exports = MenuController;
