"use strict";

const Controller = require("egg").Controller;

class RoleController extends Controller {
  // 新增用户接口
  async handleRole() {
    const { ctx } = this;
    const [roleInfo, type,id] = ctx.request.body;
    if (type == 1) {
      const data = await ctx.service.role.editRole(roleInfo,id)
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
      const data = await ctx.service.role.addRole(roleInfo);
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
  //查询用户接口
  async findRole() {
    const { ctx } = this;
    const { account, rolename } = ctx.request.body;
    ctx.body = await ctx.service.role.findRole(account, rolename);
  }
  //删除用户接口
  delRole() {
    const { ctx } = this;
    const { ids } = ctx.request.body;
    let result = true;
    ids.forEach(async id => {
      const data = await ctx.service.role.delRole(id);
      if (!data) {
        result = false;
      }
    });
    if (result) {
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

module.exports = RoleController;
