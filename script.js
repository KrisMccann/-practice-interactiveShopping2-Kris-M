const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const shoppingList = document.getElementById("shopping-list");



addBtn.addEventListener('click', () => {
   
    const itemText = itemInput.innerHTML.trim();
    const newItem = document.createElement('li');
    
    newItem.textContent = itemText;
    shoppingList.appendChild(newItem);
})



