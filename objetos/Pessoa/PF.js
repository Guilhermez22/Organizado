const Pessoa = require('./Pessoa');
const Titulo = require('./Titulo');

class PF extends Pessoa{
   
    #cpf;
    setCPF(cpf){
      if(cpf){
        this.#cpf = cpf;
        return true;
      }else{
        return false;
      }
    }
    getCPF(){
      return this.#cpf;
    }

  
    #titulo;
    setTitulo(titulo){
       if(titulo instanceof Titulo){
         this.#titulo = titulo;
         titulo.setPF(this); 
         return true;
       }else{
         return false;
       }
    }
    getTitulo(){
      return this.#titulo;
    }
}
module.exports = PF;