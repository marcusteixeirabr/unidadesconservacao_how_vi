import Comunicao from "./comunicacao";
import Instituicao from "./instituicao";
import UnidadeConservacao from "./unidade_conservacao";
import Municipio from "./municipio";




UnidadeConservacao.hasMany(Comunicacao);
Comunicacao.belongsTo(UnidadeConservacao, { foreignKey: 'unidade_id' });


UnidadeConservacao.belongsTo(instituicao, { foreignKey: 'instituicao_id' });
Instituicao.hasMany(UnidadeConservacao);

UnidadeConservacao.belongsToMany(Municipio, { through: 'unidade_municipio' });
Municipio.hasMany(UnidadeConservacao, { through: 'unidade_municipio' });