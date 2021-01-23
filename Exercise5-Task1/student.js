let userName = localStorage.getItem("sessionStudent");
if(userName)
{
    document.getElementById("userName").textContent = `${userName}(student)`;
    let cc = new Number(localStorage.getItem("courseCount"));
    function logoutUser() {
        localStorage.removeItem("sessionStudent");
        window.location.replace("./login.html");
    }


        let ccount = new Number(localStorage.getItem("totalUser"));
        let divElement = document.getElementById("dispCourse");
        let divRow;
        for (let i = 1; i <= ccount; i++) {
            let path;
            if (localStorage.getItem(`s${i}`)) {
                let s = JSON.parse(localStorage.getItem(`s${i}`));
                if (s.Name == userName) {
                    for (let j = 0; j < s.Course.length; j++) {

                        for (let k = 0; k < cc; k++) {
                            if (localStorage.getItem(`c${k}`)) {
                                if (JSON.parse(localStorage.getItem(`c${k}`)).Name == s.Course[j]) {
                                    path = JSON.parse(localStorage.getItem(`c${k}`)).Path;
                                    break;
                                }
                            }
                        }
                        if (j == 0) {


                            divRow = document.createElement("DIV");
                            divRow.classList.add("row", "pl-5", "pr-5", "pt-5");

                            let idivCol = document.createElement("DIV");
                            idivCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");


                            let idivCard = document.createElement("DIV");
                            idivCard.classList.add("card");

                            let icardImg = document.createElement("IMG");
                            icardImg.classList.add("card-img-top");
                            icardImg.setAttribute("src", path);

                            let idivCardbody = document.createElement("DIV");
                            idivCardbody.classList.add("card-body");

                            let icardPara = document.createElement("P");
                            icardPara.classList.add("card-text", "text-center");
                            icardPara.textContent = s.Course[j];

                            idivCardbody.appendChild(icardPara);
                            
                        
                            idivCard.appendChild(icardImg);
                            idivCard.appendChild(idivCardbody);

                            idivCol.appendChild(idivCard);
                            divRow.appendChild(idivCol);

                            divElement.appendChild(divRow);
                        }
                        else if (j % 4 == 0) { 


                            divRow = document.createElement("DIV");
                            divRow.classList.add("row", "pl-5", "pr-5", "pt-5");

                            let divCol = document.createElement("DIV");
                            divCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");


                            let divCard = document.createElement("DIV");
                            divCard.classList.add("card");

                            let cardImg = document.createElement("IMG");
                            cardImg.classList.add("card-img-top");
                            cardImg.setAttribute("src", path);

                            let divCardbody = document.createElement("DIV");
                            divCardbody.classList.add("card-body");

                            let cardPara = document.createElement("P");
                            cardPara.classList.add("card-text", "text-center");
                            cardPara.textContent = s.Course[j];


                            divCardbody.appendChild(cardPara);
                            

                            divCard.appendChild(cardImg);
                            divCard.appendChild(divCardbody);

                            divCol.appendChild(divCard);
                            divRow.appendChild(divCol);

                            divElement.appendChild(divRow);
                        }
                        else {

                            if (divRow == undefined) {

                                divRow = document.createElement("DIV");
                                divRow.classList.add("row", "pl-5", "pr-5", "pt-5");
                            }

                            let edivCol = document.createElement("DIV");
                            edivCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");
                            edivCol.setAttribute("id", `col${i}`);

                            let edivCard = document.createElement("DIV");
                            edivCard.classList.add("card");

                            let ecardImg = document.createElement("IMG");
                            ecardImg.classList.add("card-img-top");
                            ecardImg.setAttribute("src", path);

                            let edivCardbody = document.createElement("DIV");
                            edivCardbody.classList.add("card-body");

                            let ecardPara = document.createElement("P");
                            ecardPara.classList.add("card-text", "text-center");
                            ecardPara.textContent =s.Course[j];

                            edivCardbody.appendChild(ecardPara);
                            

                            edivCard.appendChild(ecardImg);
                            edivCard.appendChild(edivCardbody);

                            edivCol.appendChild(edivCard);
                            divRow.appendChild(edivCol);

                            divElement.appendChild(divRow);

                        }
                    }
                }
            }
        }
}
else{
    window.location.replace("./login.html");
}







