import { Sequelize, DataTypes } from "sequelize";
import { Comunicacao } from "./comunicacao";

const sequelize = new Sequelize();

export default Municipio = sequelize.define(
    'Municipio',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        uf: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
    },
    {
        tableName: 'municipio'
    });