"use strict";

const Service = require("egg").Service;

class RoleService extends Service {
  async addRole(roleInfo) {
    const { dataValues } = await this.ctx.model.Role.create(roleInfo);
    return dataValues;
  }
  async editRole(roleInfo, id) {
    return await this.ctx.model.Role.update(roleInfo, {
      where: {
        id: id
      }
    });
  }
  async findRole(account, rolename) {
    const sql = {
      where: {}
    };
    if (account) {
      sql.where.account = account;
    }
    if (rolename) {
      sql.where.rolename = {
        [Op.like]: `%${rolename}%`
      };
    }
    return await this.ctx.model.Role.findAll(sql);
  }
  async delRole(id) {
    return await this.ctx.model.Role.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = RoleService;
