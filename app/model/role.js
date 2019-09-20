module.exports = app => {
    const {INTEGER,STRING,TEXT} = app.Sequelize;
    const Role = app.model.define('role',{
        id:{
            type:INTEGER,
            primaryKey:true
        },
        account:STRING,
        remark:TEXT
    },{
        freezeTableName: true,
        timestamps: true ,
    })
    return Role
}