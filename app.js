let btn = document.getElementById("enviar");
let formulario = document.getElementById("formulario");



$(".btnCalcular").click(function(){

    let valorA=0;
    let valorB=0;
    let valorN=0;

    if($("#valorA").val().length>0){
        valorA = parseInt($("#valorA").val());
    }


    if($("#valorB").val().length>0){
        valorB = parseInt($("#valorB").val());
    }
    

    if($("#valorN").val().length>0){
        valorN = parseInt($("#valorN").val());
    }

    let deltaX= (valorB-valorA)/valorN;


    let deltaXtres= deltaX/3;

    let Xn = [valorA];

    for(let i=1; i<valorN+1;i++){
        Xn.push(parseFloat(Xn[i-1]+deltaX));
    }

    

    

    fxn=[];
    for(let i=0;i<valorN+1;i++){
        const scope = {
            x: Xn[i]
        }
        fxn.push(parseFloat(math.evaluate(expr.value,scope)))
        console.log(typeof(math.evaluate(expr.value,scope)));
    }

    let totales = [];
    for(let i=0; i<fxn.length;i++){
        if(i==0){
            totales.push(parseFloat(fxn[i]));
        }
        else if(i==fxn.length-1){
            totales.push(parseFloat(fxn[fxn.length-1]));
        }
        else{
            if(i%2!=0){
                totales.push(parseFloat(fxn[i])*4);
            }
            if(i%2==0){
                totales.push(parseFloat(fxn[i])*2);
            }
        }

        

    }

    let total=0.0;
    for(let i=0;i<totales.length;i++){
        console.log(totales[i])
        total+=parseFloat(totales[i]);
    }
    console.log(total)


    

    let template = '';
    for(let i=0;i<Xn.length;i++){
        template += `<tr>
                            <td>${i}</td>
                            <td>${Xn[i]}</td>
                            <td>${fxn[i]}</td>
                        </tr>`;   
    }
    template+=`<tr>
                    <td></td>
                    <td>Valor Integral</td>
                    <td>${total*deltaXtres}</td>
                </tr>`;  
    $("#tabla_body").html(template);

    window.scrollTo(0, document.body.scrollHeight);
});

$(".btnBorrar").click(function(){
    template = ``;
    $("#tabla_body").html(template);
    document.getElementById("valorA").value = "";
    document.getElementById("valorB").value = "";
    document.getElementById("valorN").value = "";
    document.getElementById("expr").value = "";;

});




