"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async addUser(userInfo) {
    const { dataValues } = await this.ctx.model.User.create(userInfo);
    return dataValues;
  }
  async findUser(account, username) {
    const sql = {
      where: {}
    };
    if (account) {
      sql.where.account = account;
    }
    if (username) {
      sql.where.username = username;
    }
    return await this.ctx.model.User.findAll(sql);
  }
  async delUser(id) {
    return await this.ctx.model.User.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = UserService;
