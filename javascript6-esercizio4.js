function compilazione() {
    let titolo = document.getElementById("titolo").value;
    let paragrafo = document.getElementById("testo").value;
    let data= new Date();
    let data1= data.toLocaleDateString();
    if(!titolo || !paragrafo){
        alert("inserisci dati")
    } else{
        document.getElementById("container-padre").innerHTML += `
  <div
    style="
   
    display:flex;
    flex-direction:column;
    margin-right: 20px;
    background-color:#7fffd4;
    border-width:1px;
    border:solid;
    border-color:#008000;
    padding-left:10px;
    width:200px;
    margin-top:20px;
    padding-right:200px;
    border-radius:10px;
    padding-top:15px;
    padding-bottom:20px
    ;">
 
   <h1
    style="font-weight:700; id="titolopost"> ${titolo}
   </h1>
   <p>${paragrafo}
   </p><br>
   <p style="margin-top: 10px;">${data1}
   </p>

 
 
    </div> `;
    
    document.getElementById("titolo").value="";
    document.getElementById("testo").value="";
     
     }
    
    
}