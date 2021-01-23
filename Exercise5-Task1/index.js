
function registerUser()
{

    console.log("hello");

    let userName=document.getElementById("inputName").value;
    let userPassword=document.getElementById("Password1").value;
    let confirmPassword=document.getElementById("Password2").value;
    let userRole=document.querySelector('input[name="radios"]:checked').value;
    let un=JSON.parse(localStorage.getItem(userName));
    if(userName!="" && userPassword!="" && confirmPassword!="")
    {
        if(userPassword==confirmPassword)
        {
            if(localStorage.getItem(userName))
            {
                alert('Username already exist');
            }
            else{

                if(userRole=="Student")
                {
                    if(localStorage.getItem("totalUser"))
                    {
                        let n=new Number(localStorage.getItem("totalUser"));
                        localStorage.setItem("totalUser",n+1);
                            
                    }
                    else{
                        localStorage.setItem("totalUser",1);
                    }
                    let obj={Password:userPassword,Role:userRole};
                    let objJson=JSON.stringify(obj);
                    let obj2={Name:userName,Password:userPassword,Role:userRole,Course:[]};
                    let ns=new Number(localStorage.getItem("totalUser"));
                    let objJson2=JSON.stringify(obj2);
                    localStorage.setItem(userName,objJson);
                    localStorage.setItem(`s${ns}`,objJson2);
                    window.location.replace("./Login.html");
                }
                else{
                    let obj={Password:userPassword,Role:userRole};
                    let objJson=JSON.stringify(obj);
                    localStorage.setItem(userName,objJson);
                   
                    window.location.replace("./Login.html");
                }
            }

        }
        else{
            alert("Password and Confirm Password Must be same");
        }
    }
    else{
        alert("All field required");
    }
}