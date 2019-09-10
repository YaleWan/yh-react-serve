'use strict';

const Controller = require('egg').Controller;

class ButtonsController extends Controller {
  async findButtons() {
    const {ctx} = this 
    const {id} = ctx.request.body
    ctx.body = await ctx.service.button.findButtons(id)
    
  }
}

module.exports = ButtonsController;
