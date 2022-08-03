

const expr = document.getElementById('expr')
  const pretty = document.getElementById('pretty')
  const result = document.getElementById('result')
  let parenthesis = 'keep'
  let implicit = 'hide'

  $("#result").hide();
  $("#pretty").hide();

  const mj = function (tex) {
    return MathJax.tex2svg(tex, {em: 100, ex: 100,containerWidth:1000, display: false});
  }


  pretty.innerHTML = '';
  pretty.appendChild(mj(math.parse(expr.value).toTex({parenthesis: parenthesis})));
  
  //result.innerHTML = math.format(math.evaluate(expr.value))
  

  expr.oninput = function () {

    const scope = {
        x: 1
      }

    try {
      node = math.parse(expr.value)
      result.innerHTML = math.evaluate(expr.value,scope)
    }
    catch (err) {   
    }

    try {

      const latex = node ? node.toTex({parenthesis: parenthesis, implicit: implicit}) : ''
      console.log('LaTeX expression:', latex)
      console.log(latex.split(""));
      MathJax.typesetClear();
      pretty.innerHTML = '';
      pretty.appendChild(mj(latex));

      $("#pretty").show();

      
    }
    catch (err) {
 
    }
    if($('#expr').val().length == 0){
        $("#pretty").hide();
    }
    else{
        $("#pretty").show();
    }
    
  }
