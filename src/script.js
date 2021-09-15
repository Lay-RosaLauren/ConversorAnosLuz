function converter() {
  let anosluz = document.getElementById('anl')
  let res = document.getElementById('result')
 
  if (anosluz.value.length == 0 || anosluz.value.length == ''){
    
  } else {
      var ano = Number(anosluz.value)
      var km = Number(300000) 
      var seg = Number(31536000)
      var r = seg * km
      var resultado = r * ano
    res.innerHTML = ` ${ano} Ano(s) Luz Equivalem a  ${resultado} Km`   
  
  }
}
