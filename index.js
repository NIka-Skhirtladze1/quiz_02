const button = document.querySelector('button');
const dispalyConteiner = document.querySelector('.submissions-list');


function displayDiv(name, email, age){
    const div = document.createElement('div');
    div.setAttribute('class', 'submission-item');
    div.innerHTML = `
        <div class="submission-details">
            <div class="detail-row">
              <p class="detail-label">Name:</p>
              <p class="detail-value">${name}</p>
            </div>
            <div class="detail-row">
              <p class="detail-label">Email:</p>
              <p class="detail-value">${email}</p>
            </div>
            <div class="detail-row">
              <p class="detail-label">Age:</p>
              <p class="detail-value">${age}</p>
            </div>
        </div>
    `
    dispalyConteiner.appendChild(div);
}


let check = true;
function checkEmpty(name, email, age){
    if(name == ''){
        alert("There is no Name");
        check = false;
        return;
    }
    if(email == ''){
        alert('There is no Email');
        check = false;
        return;
    }
    if(age == ''){
        check = false;
        alert('There is no Age');
        return;
    }
}

button.addEventListener('click', () =>{
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const age = document.querySelector('#age');
    checkEmpty(name.value, email.value, age.value);
    if(check){
        displayDiv(name.value, email.value, age.value);
    }
    
    name.value = '';
    email.value = '';
    age.value = '';
});
