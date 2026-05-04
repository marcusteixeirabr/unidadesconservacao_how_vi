import { DataTypes } from "sequelize";
import Municipio from "./municipio.js";
import UnidadeConservacao from "./unidade_conservacao.js";

export default (sequelize) => {
  return sequelize.define(
    "UnidadeMunicipio",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      unidade_id: {
        type: DataTypes.STRING(150),
        allowNull: false,
        references: {
          model: UnidadeConservacao,
          key: "id",
        },
      },
      municipio_id: {
        type: DataTypes.STRING(150),
        allowNull: false,
        references: {
          model: Municipio,
          key: "id",
        },
      },
    },
    {
      tableName: "unidade_municipio",
    },
  );
};
