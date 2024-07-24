let a = false
a == false ? 
document.querySelector("main").innerHTML  = `
  <form name="frm1" method="post" onsubmit="return clickForm()">
    <fieldset>
      <label>
        Usuario
        <input type="text" placeholder="Usuario" required/>
      </label>
      <label>
        Senha
        <input type="password" placeholder="********" required/>
      </label>
    </fieldset>
    <fieldset>
      <a href="http://[::]:8888">Primeira vez aqui?</a>
      <a href="http://[::]:8888">Esqueceu a senha?</a>
    </fieldset>
    <fieldset>
      <input type="submit" value="Entrar" > 
    </fieldset>
  </form>
`:
//function clickForm (str){
  document.querySelector("main").innerHTML = `
    <section>
      <input type="button" value="direção">
      <input type="button" value="docente">
      <input type="button" value="docente">
      <input type="button" value="docente">
      <input type="button" value="docente">
    </section>
  `
//}
