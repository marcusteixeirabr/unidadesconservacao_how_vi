import defineComunicao from "./comunicacao.js";
import defineInstituicao from "./instituicao.js";
import defineUnidadeConservacao from "./unidade_conservacao.js";
import defineMunicipio from "./municipio.js";

import db from "./config/database.js";

// Faz a injeção da conexão SQL para dentro das Definições das models
const Comunicacao = defineComunicao(db);
const Instituicao = defineInstituicao(db);
const UnidadeConservacao = defineUnidadeConservacao(db);
const Municipio = defineMunicipio(db);

// Declara os relacionamentos e chaves estrangeiras das models
UnidadeConservacao.hasMany(Comunicacao, { foreignKey: "unidade_id" });
Comunicacao.belongsTo(UnidadeConservacao, { foreignKey: "unidade_id" });

UnidadeConservacao.belongsTo(Instituicao, { foreignKey: "instituicao_id" });
Instituicao.hasMany(UnidadeConservacao, { foreignKey: "instituicao_id" });

UnidadeConservacao.belongsToMany(Municipio, { through: "unidade_municipio" });
Municipio.belongsToMany(UnidadeConservacao, { through: "unidade_municipio" });

export { db, Comunicacao, Instituicao, UnidadeConservacao, Municipio };
