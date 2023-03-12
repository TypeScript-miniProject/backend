import { Model, InferAttributes, InferCreationAttributes, CreationOptional,DataTypes } from 'sequelize';
import sequelize from './index'


class Posts extends Model<InferAttributes<Posts>,InferCreationAttributes<Posts>> {
    declare postId: CreationOptional<number>;
    declare title: string;
    declare content: string;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Posts.init({
    postId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

},{
    tableName: 'Posts',
    sequelize
});

export default Posts;