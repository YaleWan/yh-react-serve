module.exports = app => {
    const {INTEGER,STRING,TEXT} = app.Sequelize;
    const User = app.model.define('user',{
        id:{
            type:INTEGER,
            primaryKey:true
        },
        account:STRING,
        username:STRING,
        tel:STRING,
        phone:STRING,
        email:STRING,
        sex:STRING,
        remark:TEXT
    },{
        freezeTableName: true,
        timestamps: true ,
    })
    return User
}