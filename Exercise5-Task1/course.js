let studentCount = new Number(localStorage.getItem("totalUser"));
let userName = localStorage.getItem("sessionAdmin");
if(userName)
{

let stuDiv = document.getElementById("stu");
let couDiv = document.getElementById("cou");
let courseArrayid = [];
let courseArrayName = [];
let ccount = new Number(localStorage.getItem("courseCount"));
for (let j = 0; j < ccount; j++) {
    if (localStorage.getItem(`c${j + 1}`)) {
        courseArrayid.push(`c${j + 1}`);
        let cobj = JSON.parse(localStorage.getItem(`c${j + 1}`));
        courseArrayName.push(cobj.Name);
    }
}
for (let i = 0; i < studentCount; i++) {
    let student = JSON.parse(localStorage.getItem(`s${i + 1}`));
    let sid = `s${i + 1}`;
    let newDiv = document.createElement("Div");
    let string = `<button type="button" class="btn mt-4 btn-light" id=${sid} onclick="displayCourse(this.id)">${student.Name}</button>`;

    newDiv.insertAdjacentHTML('beforeend', string);
    stuDiv.appendChild(newDiv);

}
let c = 1;
function displayCourse(id) {

    if (c == 0) {
        document.getElementById("cou").innerHTML = "";
        c = 1;

    }
    else {
        c = 0;

        for (const val of courseArrayName) {
            let s = JSON.parse(localStorage.getItem(id));
            if (s.Course.includes(val)) {
                let bid = `c${id}`;
                let str = `<div class="d-flex mt-2">
                        <p>${val}</p>
                        <button type="button" class="btn ml-4 btn-danger" name=${val} id=${bid} onclick="removeCourse(this)">Remove</button>
                        </div>`;
                couDiv.insertAdjacentHTML('beforeend', str);

            }
            else {
                let ebid = `c${id}`;
                let estr = `<div class="d-flex mt-2">
                        <p>${val}</p>
                        <button type="button" class="btn btn-success ml-4" name=${val} id=${ebid} onclick="addCourse(this)">Add</button>
                        </div>`;
                couDiv.insertAdjacentHTML('beforeend', estr);

            }
        }
    }

}
function addCourse(c) {
    console.log(c.name);
    let btnId = c.id;
    console.log(btnId);
    let stud = JSON.parse(localStorage.getItem(`s${btnId.substr(2, btnId.length)}`));

    stud.Course.push(c.name);
    localStorage.setItem(`s${btnId.substr(2, btnId.length)}`, JSON.stringify(stud));
    window.location.reload();

}
function removeCourse(c) {
    let btnId = c.id;
    console.log(btnId);
    let stud = JSON.parse(localStorage.getItem(`s${btnId.substr(2, btnId.length)}`));
    
    for (let s = 0; s < stud.Course.length; s++) {
        if (stud.Course[s] == c.name) {
            let ind = stud.Course.indexOf(c.name);
            stud.Course.splice(ind, 1);
        }
    }
    localStorage.setItem(`s${btnId.substr(2, btnId.length)}`, JSON.stringify(stud));
    window.location.reload();

}
}
else{
    window.location.replace("./login.html");
}
