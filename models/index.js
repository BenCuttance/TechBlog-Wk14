const User = require('./User');
const Messages = require('./messages')

User.hasMany(Messages, {
    foreignKey: 'user_id'
})

Messages.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
    
})


module.exports = { User, Messages };
