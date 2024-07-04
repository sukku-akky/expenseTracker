const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');


form.addEventListener("submit",function(event){
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    let expense={
        Amount: amount,
        Description: description,
        Category: category

    };

    const expensejson=JSON.stringify(expense);

    const newLi=document.createElement("li");
    newLi.innerHTML=`${amount}-${description}-${category}`;
    const deleteButton=document.createElement("button");
    deleteButton.textContent='Delete Button';
    newLi.appendChild(deleteButton);
    const editButton=document.createElement("button");
    editButton.textContent="Edit Button"
    newLi.appendChild(editButton);

    expenseList.appendChild(newLi);
    

    deleteButton.addEventListener("click",function(e){
        expenseList.removeChild(newLi);
        localStorage.removeItem("expense");
    });
    editButton.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.removeItem("expense");
        expenseList.removeChild(newLi);
        document.getElementById("description").value=description;
        document.getElementById("amount").value=amount;
        document.getElementById("category").value=category;

    })
    localStorage.setItem(amount,expensejson);


})