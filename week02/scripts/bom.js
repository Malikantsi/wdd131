// Select the necessary elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {  // Check if input is not empty
        const li = document.createElement("li");  // Create a new list item
        const deleteButton = document.createElement("button"); // Create delete button

        li.textContent = input.value;  // Set the text content of the list item
        deleteButton.textContent = "❌";  // Set delete button text
        deleteButton.classList.add("delete-btn"); // Optional: Add class for styling

        li.append(deleteButton); // Append delete button to the list item
        list.append(li); // Append the new item to the list

        input.value = '';  // Clear the input field
        input.focus();  // Refocus on the input field

        // Add event listener to delete the list item when delete button is clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    } else {
        alert("Please enter a book and chapter before adding.");
        input.focus();  // Refocus if input is empty
    }
});
