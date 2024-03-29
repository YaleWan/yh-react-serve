module.exports = app => {
    const {INTEGER,STRING} = app.Sequelize;
    const Button = app.model.define('button',{
        id:{
            type:INTEGER,
            primaryKey:true
        },
        name:STRING,
        event:STRING,
        icon:STRING,
        pid:STRING
    },{
        freezeTableName: true,
        timestamps: false ,
    })
    return Button
}