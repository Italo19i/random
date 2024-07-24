const json = (param,value)=> 
  '{"' + param + '"' + ':' + '"' + value + '"}'

console.log(json("nome", "italo"))
