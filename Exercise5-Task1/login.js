function loginUser()
{
    let userName=document.getElementById("inputName").value;
    let userPassword=document.getElementById("Password1").value;
    let up=JSON.parse(localStorage.getItem(userName));
    let userRole=up.Role;
    if(localStorage.getItem(userName) && userPassword==up.Password)
    {
        
        if(userRole=="Admin")
        {
            localStorage.setItem("sessionAdmin",userName);
            window.location.replace("./admin.html");
        }
        else{
            localStorage.setItem("sessionStudent",userName);
            window.location.replace("./student.html");
        }
    }
    else{
        alert("Incorrect username or password");
    }
}