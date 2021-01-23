let userName = localStorage.getItem("sessionAdmin");
document.getElementById("userName").textContent = `${userName}(Admin)`;
if(userName){
function logoutUser() {
    localStorage.removeItem("session");
    window.location.replace("./login.html");
}

function addData() {
    let cName = document.getElementById("cname").value;
    let cPath = document.getElementById("cimg").value;
    if (localStorage.getItem("courseCount")) {
        let cc = new Number(localStorage.getItem("courseCount"));
        let cId = `c${cc + 1}`;
        let objCourse = { Name: cName, Path: cPath };
        let objCourseJson = JSON.stringify(objCourse);
        localStorage.setItem(`${cId}`, objCourseJson);
        localStorage.setItem("courseCount", cc + 1);
    }
    else {
        localStorage.setItem("courseCount", 1);
        let ecc = new Number(localStorage.getItem("courseCount"));
        let ecId = `c${ecc}`;
        let eobj = { Name: cName, Path: cPath };
        let eobjJson = JSON.stringify(eobj);

        localStorage.setItem(`${ecId}`, eobjJson);

    }
    document.getElementById("cname").value = "";
    document.getElementById("cimg").value = "";

    document.getElementById("dispCourse").innerHTML = "";
    document.getElementById("dispCourse").innerHTML = `<button type="button" id="dispBtn" class="btn btn-light border border-primary pl-3 pr-3 mb-5 ml-5" onclick="displayData()">Display Courses</button> `;
}

function displayData() {
    document.getElementById("dispCourse").innerHTML = `<button type="button" id="dispBtn" class="btn btn-light border border-primary pl-3 pr-3 mb-5 ml-5" onclick="displayData()" disabled>Display Courses</button> `;

    let ccount = new Number(localStorage.getItem("courseCount"));
    let divElement = document.getElementById("dispCourse");
    let divRow;
    for (let i = 1; i <= ccount; i++) {
        let gcid = `c${i}`; //
        if (localStorage.getItem(gcid)) {
            let course = JSON.parse(localStorage.getItem(gcid));
            
            let name = course.Name;
            let imgPath = course.Path;
            if (i == 0) {


                divRow = document.createElement("DIV");
                divRow.classList.add("row", "pl-5", "pr-5", "pt-5");

                let idivCol = document.createElement("DIV");
                idivCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");
                idivCol.setAttribute("id",`col${i}`);//

                let idivCard = document.createElement("DIV");
                idivCard.classList.add("card");

                let icardImg = document.createElement("IMG");
                icardImg.classList.add("card-img-top");
                icardImg.setAttribute("src", imgPath);

                let idivCardbody = document.createElement("DIV");
                idivCardbody.classList.add("card-body");

                let icardPara = document.createElement("P");
                icardPara.classList.add("card-text", "text-center");
                icardPara.textContent = name;

                let icardTitle = document.createElement("BUTTON");
                icardTitle.classList.add("card-title", "btn", "btn-info");
                icardTitle.innerText = "Assign Course";
                icardTitle.setAttribute("id", `assign${i}`);
                icardTitle.addEventListener("click", function () {
                    localStorage.setItem("courseAssign",this.id);
                    window.location.replace("./course.html");
                });

                let icardTitle1 = document.createElement("BUTTON");
                icardTitle1.classList.add("card-title", "btn", "btn-danger", "ml-1");
                icardTitle1.innerText = "Delete Course";
                icardTitle1.setAttribute("id", `del${i}`);//
                icardTitle1.addEventListener("click", function () {

                    let ctoDelete = `c${(this.id)[3]}`;
                    localStorage.removeItem(ctoDelete);
                    let cdlete = new Number(localStorage.getItem("courseCount"));
                   

                   //document.getElementById(`col${(this.id)[3]}`).remove();
                   document.getElementById("dispCourse").innerHTML="";
                    document.getElementById("dispCourse").innerHTML = `<button type="button" id="dispBtn" class="btn btn-light border border-primary pl-3 pr-3 mb-5 ml-5" onclick="displayData()">Display Courses</button> `;
                    

                });

                idivCardbody.appendChild(icardPara);
                idivCardbody.appendChild(icardTitle);
                idivCardbody.appendChild(icardTitle1);

                idivCard.appendChild(icardImg);
                idivCard.appendChild(idivCardbody);

                idivCol.appendChild(idivCard);
                divRow.appendChild(idivCol);

                divElement.appendChild(divRow);
            }
            else if (i % 4 == 0) {  //


                divRow = document.createElement("DIV");
                divRow.classList.add("row", "pl-5", "pr-5", "pt-5");

                let divCol = document.createElement("DIV");
                divCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");
                divCol.setAttribute("id",`col${i}`);//

                let divCard = document.createElement("DIV");
                divCard.classList.add("card");

                let cardImg = document.createElement("IMG");
                cardImg.classList.add("card-img-top");
                cardImg.setAttribute("src", imgPath);

                let divCardbody = document.createElement("DIV");
                divCardbody.classList.add("card-body");

                let cardPara = document.createElement("P");
                cardPara.classList.add("card-text", "text-center");
                cardPara.textContent = name;

                let cardTitle = document.createElement("BUTTON");
                cardTitle.classList.add("card-title", "btn", "btn-info");
                cardTitle.innerText = "Assign Course";
                cardTitle.setAttribute("id", `assign${i}`);
                cardTitle.addEventListener("click", function () {
                    localStorage.setItem("courseAssign",this.id);
                    window.location.replace("./course.html");
                });


                let cardTitle1 = document.createElement("BUTTON");
                cardTitle1.classList.add("card-title", "btn", "btn-danger", "ml-1");
                cardTitle1.innerText = "Delete Course";
                cardTitle1.setAttribute("id", `del${i}`);//

                cardTitle1.addEventListener("click", function () {

                    let ictoDelete = `c${(this.id)[3]}`;
                    localStorage.removeItem(ictoDelete);
                    let icdlete = new Number(localStorage.getItem("courseCount"));
                   
                 document.getElementById("dispCourse").innerHTML="";
                 document.getElementById("dispCourse").innerHTML = `<button type="button" id="dispBtn" class="btn btn-light border border-primary pl-3 pr-3 mb-5 ml-5" onclick="displayData()">Display Courses</button> `;


                });


                divCardbody.appendChild(cardPara);
                divCardbody.appendChild(cardTitle);
                divCardbody.appendChild(cardTitle1);

                divCard.appendChild(cardImg);
                divCard.appendChild(divCardbody);

                divCol.appendChild(divCard);
                divRow.appendChild(divCol);

                divElement.appendChild(divRow);
            }
            else {

                if(divRow==undefined)
                {
                    console.log("jkjkkkkkkkkkkkkkkkk");
                    divRow = document.createElement("DIV");
                     divRow.classList.add("row", "pl-5", "pr-5", "pt-5");
                }

                let edivCol = document.createElement("DIV");
                edivCol.classList.add("col-md-4", "pb-sm-1", "pb-1", "pb-md-0", "text-center");
                edivCol.setAttribute("id",`col${i}`);//

                let edivCard = document.createElement("DIV");
                edivCard.classList.add("card");

                let ecardImg = document.createElement("IMG");
                ecardImg.classList.add("card-img-top");
                ecardImg.setAttribute("src", imgPath);

                let edivCardbody = document.createElement("DIV");
                edivCardbody.classList.add("card-body");

                let ecardPara = document.createElement("P");
                ecardPara.classList.add("card-text", "text-center");
                ecardPara.textContent = name;

                let ecardTitle = document.createElement("BUTTON");
                ecardTitle.classList.add("card-title", "btn", "btn-info");
                ecardTitle.innerText = "Assign Course";
                ecardTitle.setAttribute("id", `assign${i}`);
                ecardTitle.addEventListener("click", function () {
                    localStorage.setItem("courseAssign",this.id);
                    window.location.replace("./course.html");
                });


                let ecardTitle1 = document.createElement("BUTTON");
                ecardTitle1.classList.add("card-title", "btn", "btn-danger", "ml-1");
                ecardTitle1.innerText = "Delete Course";
                ecardTitle1.setAttribute("id", `del${i}`);//

                ecardTitle1.addEventListener("click", function () {

                    let ectoDelete = `c${(this.id)[3]}`;
                    localStorage.removeItem(ectoDelete);
                    let ecdlete = new Number(localStorage.getItem("courseCount"));
                 
                   document.getElementById("dispCourse").innerHTML="";
                   document.getElementById("dispCourse").innerHTML = `<button type="button" id="dispBtn" class="btn btn-light border border-primary pl-3 pr-3 mb-5 ml-5" onclick="displayData()">Display Courses</button> `;


                });

                 edivCardbody.appendChild(ecardPara);
                edivCardbody.appendChild(ecardTitle);
                edivCardbody.appendChild(ecardTitle1);

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
else{
    window.location.replace("./login.html");
}