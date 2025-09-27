import PF from './pessoas/PF.js';
import PFDAO from './pessoas/DAOs/PFDAO.mjs';

import Endereco from './pessoas/Endereco.js';
import Telefone from './pessoas/Telefone.js';
import IE from './pessoas/IE/IEclss.js';

const pf = new PF();
pf.setNome("Pedro");
pf.setEmail("pedro@ifb.edu.br");
pf.setCPF("123.456.789-99");

const end = new Endereco();
end.setLogradouro("QNM 40");
end.setCep("12345-678");

pf.setEndereco(end);

const fone = new Telefone();

fone.setDdd("61");
fone.setNumero("99999-8888");

pf.addTelefone(fone);

const fone2 = new Telefone();

fone2.setDdd("62");
fone2.setNumero("99999-7777");

pf.addTelefone(fone2);

const ie = new IE();
ie.setNumero('123456');
ie.setEstado('SP');
ie.setDataRegistro(new Date());

pf.setIE(ie);



const pfdao = new PFDAO(pf);

var x = pfdao.toJSON();
pfdao.saveJSON();

console.log(x);
console.log(JSON.stringify(x));
console.log(pfdao.recoveryJSON());


