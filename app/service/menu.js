"use strict";

const Service = require("egg").Service;

class MenuService extends Service {
  async findAllMenu() {
    let rootNeeds = await this.ctx.model.Menu.findAll({
      raw:true,
      where: {
        pid: 0
      }
    });
    rootNeeds = await this.findAllSubMenu(rootNeeds);
    return rootNeeds;
  }
  async findAllSubMenu(rootNeeds) {
    let childrenPromise = [];
    rootNeeds.forEach(item => {
      childrenPromise.push(
        this.ctx.model.Menu.findAll({
          raw:true,
          where: {
            pid: item.id
          }
        })
      );
    });
    let children = await Promise.all(childrenPromise);
    for(let i = 0 ; i < children.length ; i++){
      if(children[i].length>0){
        children[i] = await this.findAllSubMenu(children[i])
        rootNeeds[i].children = children[i]
      }
    }
    return rootNeeds
  }

  async addMenu(menuInfo) {    
    const { dataValues } = await this.ctx.model.Menu.create(menuInfo);
    return dataValues;
  }
  async editMenu(menuInfo, id) {
    return await this.ctx.model.Menu.update(menuInfo, {
      where: {
        id: id
      }
    });
  }
  async delMenu(id) {
    return await this.ctx.model.Menu.destroy({
      where: {
        id
      }
    });
  }
}

module.exports = MenuService;
