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
  async addButton(buttonInfo) {
    const { dataValues } = await this.ctx.model.Button.create(buttonInfo);
    return dataValues;
  }
  async editButton(buttonInfo, id) {
    return await this.ctx.model.Button.update(buttonInfo, {
      where: {
        id: id
      }
    });
  }
  async delButton(id) {
    return await this.ctx.model.Button.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = ButtonService;
