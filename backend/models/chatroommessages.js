'use strict';
/*
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatRoomMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     
    static associate(models) {
      // define association here
    }
  };
  ChatRoomMessages.init({
    author: DataTypes.STRING,
    message: DataTypes.TEXT,
    chatRoomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChatRoomMessages',
  });
  return ChatRoomMessages;
};
*/

/**
 * Create a has many relationship between ChatRoom and ChatRoomMessages
 */
module.exports = (sequelize, DataTypes) => {
  const ChatMessage = sequelize.define('ChatMessage', {
    chatRoomId: DataTypes.INTEGER,
    author: DataTypes.STRING,
    message: DataTypes.TEXT
  }, {});
  ChatMessage.associate = function(models) {
    // associations can be defined here
    ChatMessage.belongsTo(models.ChatRoom, {
      foreignKey: 'chatRoomId',
      targetKey: 'id'
    });
  };

  return ChatMessage
}