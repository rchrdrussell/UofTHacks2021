'use strict';
/*
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
    static associate(models) {
      // define association here
    }
  };
  ChatRoom.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ChatRoom',
  });
  return ChatRoom;
}; */

module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define("ChatRoom", {
    name: DataTypes.STRING,
  }, {});
  ChatRoom.associate = function(models){
    // association can be defined here
    ChatRoom.hasMany(models.ChatRoomMessage, {
      foreignKey: "chatRoomId",
      sourceKey: "id",
    });
  }
  return ChatRoom;
}