function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    // li.onclick = () => li.remove(); // click = delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = () => li.classList.toggle("completed");
    li.appendChild(completeBtn);

    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
}
const style = document.createElement("style");
style.innerHTML = `
  li.completed { text-decoration: line-through; color: gray; }
`;
document.head.appendChild(style);