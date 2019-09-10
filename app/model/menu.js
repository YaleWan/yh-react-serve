module.exports = app =>{
    const {INTEGER,STRING} = app.Sequelize;
    const Menu = app.model.define(
        'menu',{
            id:{
                type:INTEGER,
                primaryKey:true
            },
            title:STRING,
            key:STRING,
            pid:INTEGER
        },{
            freezeTableName: true,
            timestamps: false ,
        }
    )
    return Menu
}