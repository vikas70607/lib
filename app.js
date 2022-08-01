console.log("this is library");

// function to create book objects
function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// function to display books



// 
let libform = document.getElementById('libform');
libform.addEventListener('submit',libsumbit);

function libsumbit(e){
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
    else if(cooking.checked){
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();
}
