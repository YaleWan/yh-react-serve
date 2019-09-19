'use strict';

const Controller = require('egg').Controller;

class ButtonsController extends Controller {
  async findButtons() {
    const {ctx} = this 
    const {id} = ctx.request.body
    ctx.body = await ctx.service.button.findButtons(id)
    
  }
  async handleButton(){
    const { ctx } = this;
    const [buttonInfo,type,id] = ctx.request.body;
    if (type == 1) {
      const data = await ctx.service.button.editButton(buttonInfo,id)
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
      const data = await ctx.service.button.addButton(buttonInfo);
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
  async delButton(){
    const { ctx } = this;
    const { ids } = ctx.request.body;
    let result = true;
    ids.forEach(async id => {
      const data = await ctx.service.button.delButton(id);
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

module.exports = ButtonsController;
