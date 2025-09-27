import {localStorage} from './localStorage.mjs';
import Aluno from '../Aluno.js';
export default class Aluno{

  #aluno;

  constructor(aluno){
    if(aluno instanceof Aluno){
      this.#aluno = aluno;
    }
  }

  toJSON(){
    let fones = [];
    for(let fone of this.#aluno.getTelefones())
      {
          fones.push({
               ddd : fone.getDdd(),
               numero : fone.getNumero(),
          });
      }
    return {
      nome : this.#aluno.getNome(),
      email : this.#aluno.getEmail(),
      cpf : this.#aluno.getCPF(),
      endereco : {
         logradouro : this.#aluno.getEndereco().getLogradouro(),
         cep : this.#aluno.getEndereco().getCep(), 
      },
      telefone : fones,
      ie : {
        numero : this.#aluno.getIE().getNumero(),
        estado : this.#aluno.getIE().getEstado(),
        dataRegsitro : this.#aluno.getIE().getDataRegistro(),
      }
    }
  }

  saveJSON(){
  
   localStorage.setItem("aluno", JSON.stringify(this.toJSON()));
  }
  recoveryJSON(){
  
   return JSON.parse(localStorage.getItem("aluno"));
  }

}
