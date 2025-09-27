import Aluno from './pessoas/Aluno.js';
import Aluno from './pessoas/DAOs/Aluno.mjs';

import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';

const aluno = new Aluno();
aluno.setNome("Pedro");
aluno.setEmail("pedro@ifb.edu.br");
aluno.setCPF("123.456.789-99");

const end = new Endereco();
end.setLogradouro("QNM 40");
end.setCep("12345-678");

aluno.setEndereco(end);

const fone = new Telefone();

fone.setDdd("61");
fone.setNumero("99999-8888");

aluno.addTelefone(fone);

const fone2 = new Telefone();

fone2.setDdd("62");
fone2.setNumero("99999-7777");

aluno.addTelefone(fone2);

const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

aluno.setIE(ie);

const alunodao = new AlunoDAO(aluno);

var x = alunodao.toJSON();
alunodao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(alunodao.recoveryJSON());

