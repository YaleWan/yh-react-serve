'use strict';

const Service = require('egg').Service;

class ButtonService extends Service {
  async findButtons(id) {
    let buttons = await this.ctx.model.Button.findAll({
        where:{
            pid:id
        }
    })
    return buttons
  }
}

module.exports = ButtonService;
