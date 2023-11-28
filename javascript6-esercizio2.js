let agenda = {
    
    contatti:[{"nome":"Giulio","telefono":"3978645612"},
    {"nome":"Davide","telefono":"3981230456"}, 
    {"nome":"Mario","telefono":"3978645612"},
     {"nome":"Luca","telefono":"3981230456"},
     {"nome":"Antonio","telefono":"3978645612"},
     {"nome":"Sara","telefono":"3981230456"},
     {"nome":"Lisa","telefono":"3978645612"},
     {"nome":"Gemma","telefono":"3981230456"}, 
     {"nome":"Gildo","telefono":"3978645612"},
     {"nome":"Ginevra","telefono":"3981230456"}],
     

     stampacontatti:function(){
      for(i=0;i<this.contatti.length;i++){
        console.log(this.contatti[i].nome)
      }
     },

     

     stampacontatto:function(){
        console.log(this.contatti[3])
     },


     eliminacontatto:function(indicepagina){
       let listafiltrata= this.contatti.filter(function(pagina){
        return pagina.numero != indicepagina
       })
        this.contatti=listafiltrata
        console.log(this.contatti)
     },
       

     aggiungicontatto:function(elementodaaggiungere){
      this.contatti.push(elementodaaggiungere)
      console.log(this.contatti)
     },


     modificacontatto:function(contattodamodificare,nuovocontatto){
      let contatto=this.contatti.find(contatto=>contatto.nome===contattodamodificare);
      if(contatto) {
        contatto.nome=nuovocontatto
      }
      console.log(this.contatti)
     }
     
    
    
}   

agenda.stampacontatti()
agenda.stampacontatto()
agenda.eliminacontatto(0)
agenda.aggiungicontatto({"nome":"andrea","telefono":"66327636"})
agenda.modificacontatto("Giulio","Cesare")