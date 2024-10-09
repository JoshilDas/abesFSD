const validate = (event)=>{
    event.preventDefault();
    let Uvalue=document.getElementById("login").value;
    let pass=document.getElementById("pass").value;
    let p1=document.getElementById('result');
    event.preventDefault;
    if(Uvalue=="admin" && pass=='admin'){
        p1.innerText="success";
    }
    else{
        p1.innerText="nooooo"
    }

}