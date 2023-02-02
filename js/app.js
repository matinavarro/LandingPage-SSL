let form = document.querySelector("#form")
let btn = document.querySelector("#btn")

function validar(){
    let deshabilitar = false;

    if (form.txtname.value ==  ""){
        deshabilitar = true;
    }
    if(form.txtsurname.value == ""){
        deshabilitar = true;
    }
    if(form.telareacod.value ==  ""){
        deshabilitar = true;
    }
    if(form.telform.value ==  ""){
        deshabilitar = true;
    }
    if(form.location.value ==  ""){
        deshabilitar=true;
    }
    if(form.datebirth.value ==  ""){
        deshabilitar= true;
    }
    if(form.emailform.value ==  ""){
        deshabilitar = true;
    }
    if(form.chkprivate.checked){
        deshabilitar = true;
    }
    if(deshabilitar == true){
        btn.disabled = true
    }else{
        btn.disabled = false
    }
}

form.addEventListener("keyup", validar)