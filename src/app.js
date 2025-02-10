const arrayList = [];

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const addButton = document.getElementById("add-btn");
    const list = document.getElementById("list");

    const renderList = () => {
        list.innerHTML = "";

        for (let i = 0; i < arrayList.length; i++) {
            const elem = arrayList[i];

            const item = document.createElement("li");
            item.className = "item";
            item.innerHTML = `${elem} <button id=${i} class="delete-btn">Delete</button>`;
            list.prepend(item);
        }
    }

    addButton.addEventListener("click", () => {
        if (!input.value) return;

        arrayList.push(input.value);

        renderList();

        input.value = "";
    })

    list.addEventListener("click", (event) => {
        const deleteBtn = event.target;

        if (deleteBtn.classList.contains("delete-btn")) {

            arrayList.splice(deleteBtn.id, 1);

            renderList();
        }
    })
})
