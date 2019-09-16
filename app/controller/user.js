"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  // 新增用户接口
  async addUser() {
    const { ctx } = this;
    const [userInfo, type,id] = ctx.request.body;
    console.log('id :', id);
    console.log('type :', type);
    if (type == 1) {
      console.log('1111 :', 1111);
      const data = await ctx.service.user.editUser(userInfo,id)
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
      console.log('2222 :', 2222);
      const data = await ctx.service.user.addUser(userInfo);
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
  async findUser() {
    const { ctx } = this;
    const { account, username } = ctx.request.body;
    ctx.body = await ctx.service.user.findUser(account, username);
  }
  //删除用户接口
  delUser() {
    const { ctx } = this;
    const { ids } = ctx.request.body;
    let result = true;
    ids.forEach(async id => {
      const data = await ctx.service.user.delUser(id);
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

module.exports = UserController;
