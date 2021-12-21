function onchang(){
   const container =  document.getElementById("container1")
       const className = container.className
       if( className.includes('lightTheme')){
           container.className = 'darkThem'
       }
       else if(className){
       container.className = 'lightTheme'}
   
}
function refresh(){
    const permission = document.getElementById("permission-photo")
    const calsspermission = permission.className
    if(calsspermission.includes("permission-photo")){
        permission.className = "permission1"
    }
    else if(calsspermission.includes("permission1")){
        permission.className = "permission2"
    }
    else if (calsspermission.includes("permission2")){
        permission.className = "permission3"
    }
    else if (calsspermission.includes("permission3")){
        permission.className = "permission4"
    }
    else if (calsspermission.includes("permission4")){
        permission.className = "permission5"
    }
    else if (calsspermission.includes("permission5")){
        permission.className = "permission6"
    }
    else if (calsspermission.includes("permission6")){
        permission.className = "permission1"
    }

}
function btn(){
    var input1 = document.getElementById("gender");
    var getinput2 = document.getElementById("email").value;
    var getinput1 = document.getElementById("name").value;
    document.getElementById("real-name").innerHTML = "2- Your Email address is :" +getinput2;
    input1.innerHTML = "1- Your name is : "+getinput1;
    const permission = document.getElementById("permission-photo")
    const calsspermission = permission.className
    var permissionnumber = document.getElementById("permission-input").value;
    if(permissionnumber == "45781" && calsspermission.includes("permission1") ){
    document.getElementById("main2").style.display = "block"
}
    else if(permissionnumber == "32619" && calsspermission.includes("permission2") ){
        document.getElementById("main2").style.display = "block"
    }
    else if(permissionnumber == "98631" && calsspermission.includes("permission3") ){
        document.getElementById("main2").style.display = "block"
    }
    else if(permissionnumber == "67484" && calsspermission.includes("permission4") ){
        document.getElementById("main2").style.display = "block"
    }
    else if(permissionnumber == "23567" && calsspermission.includes("permission5") ){
        document.getElementById("main2").style.display = "block"
    }
    else if(permissionnumber == "12875" && calsspermission.includes("permission6") ){
        document.getElementById("main2").style.display = "block"
    }
    else{
        alert("it is wrong")
    }
}
function btn2(){
    document.getElementById("main2").style.display = "none";
    document.getElementById("main1").style.display = "none";
    document.getElementById("last12").style.display = "block";
    const heading = "Congratulation! your registration was successful";
let i = 0;

const typing = () =>{
    if(i < heading.length){
        document.querySelector(".last12").innerHTML += heading.charAt(i);
        i++;
        setTimeout(typing , 100);
    }

}
typing();
   


}





