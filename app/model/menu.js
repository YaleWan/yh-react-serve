module.exports = app =>{
    const {INTEGER,STRING,TEXT} = app.Sequelize;
    const Menu = app.model.define(
        'menu',{
            id:{
                type:INTEGER,
                primaryKey:true
            },
            title:STRING,
            key:STRING,
            pid:INTEGER,
            type:STRING,
            remark:TEXT

        },{
            freezeTableName: true,
            timestamps: false ,
        }
    )
    return Menu
}