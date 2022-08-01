console.log("this is library");


// function to create book objects
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// function to display books

function Display() {
}

// 
let index = 1;

Display.prototype.add = function (book) {
    let tablebody = document.getElementById('tbody');
    let uiString = `<tr>
    <th scope="row">${index++}</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`

    tablebody.innerHTML += uiString;

}
Display.prototype.clear = function () {
    let libform = document.getElementById('libform');
    libform.reset();
}

Display.prototype.validate = function(book){
    if ((book.name.length > 3) && (book.author.length >3)) {
        return true;
    }
    else{
        return false;
    }
}

Display.prototype.show = function(para){
    let s;
    let dis = document.getElementById('check');
    if (para == s) {
        
        s = `<div class="alert alert-success" role="alert">
        added successfully !!!!!
      </div>`
    }
    else{
       s = `<div class="alert alert-danger" role="alert">
  failed to add
</div>`
    }
    dis.innerHTML += s;
}

let libform = document.getElementById('libform');
libform.addEventListener('submit', libsumbit);

function libsumbit(e) {
    console.log('you have submitted');

    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    
    
    let display = new Display();
    
    if (display.validate(book)) {
        console.log(book);
        display.add(book);
        display.clear();
        display.show(s);
    }
    else{
        display.show(e);
    }
    
    e.preventDefault();

}
