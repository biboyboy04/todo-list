const contentDiv = document.getElementById('content');

const todoListHeaderDiv = document.createElement('div');
todoListHeaderDiv.className = 'todo-list-header';

const todoListHeaderTitleDiv = document.createElement('div');
todoListHeaderTitleDiv.className = 'todo-list-header-title';
todoListHeaderTitleDiv.innerText = 'TO:DO';

const redButtonImg = document.createElement('img');
redButtonImg.className = 'red-button';
redButtonImg.src = '../src/assets/red-button2.png';
redButtonImg.alt = '';

const todoListBodyDiv = document.createElement('div');
todoListBodyDiv.className = 'todo-list-body';

const projectListDiv = document.createElement('div');
projectListDiv.className = 'project-list';

const projectListTitleDiv = document.createElement('div');
projectListTitleDiv.className = 'project-list-title';
projectListTitleDiv.innerText = 'Projects';

const projectContainerDiv = document.createElement('div');
projectContainerDiv.className = 'project-container';

const projectDiv = document.createElement('div');
projectDiv.className = 'project';

const bookImg = document.createElement('img');
bookImg.src = '../src/assets/book.png';
bookImg.alt = '';

const projectNameDiv = document.createElement('div');
projectNameDiv.className = 'project-name';
projectNameDiv.innerText = 'All';

const projectHr = document.createElement('hr');

const projectAddDiv = document.createElement('div');
projectAddDiv.className = 'project-add';

const addImgProject = document.createElement('img');
addImgProject.src = '../src/assets/add.png';
addImgProject.alt = '';

const projectActionsContainerDiv = document.createElement('div');
projectActionsContainerDiv.className = 'project-actions-container';

const editImg = document.createElement('img');
editImg.src = '../src/assets/edit.png';
editImg.alt = '';

const deleteImg = document.createElement('img');
deleteImg.src = '../src/assets/delete.png';
deleteImg.alt = '';

const taskListDiv = document.createElement('div');
taskListDiv.className = 'task-list';

const sortByDateDiv = document.createElement('div');
sortByDateDiv.className = 'sort-by-date';
sortByDateDiv.innerText = 'Date';

const sortByImportanceDiv = document.createElement('div');
sortByImportanceDiv.className = 'sort-by-importance';
sortByImportanceDiv.innerText = 'Importance';

const taskContainerDiv = document.createElement('div');
taskContainerDiv.className = 'task-container';

const taskDiv = document.createElement('div');
taskDiv.className = 'task';

const taskNameDiv = document.createElement('div');
taskNameDiv.className = 'task-name';
taskNameDiv.innerText = 'Projects';

const taskHr = document.createElement('hr');

const taskAddDiv = document.createElement('div');
taskAddDiv.className = 'task-add';

const addImgTask = document.createElement('img');
addImgTask.src = '../src/assets/add.png';
addImgTask.alt = '';

const taskActionsContainerDiv = document.createElement('div');
taskActionsContainerDiv.className = 'task-actions-container';

const taskEditImg = document.createElement('img');
taskEditImg.src = '../src/assets/edit.png';
taskEditImg.alt = '';

const taskDeleteImg = document.createElement('img');
taskDeleteImg.src = '../src/assets/delete.png';
taskDeleteImg.alt = '';

// Append all elements to their parent containers
taskActionsContainerDiv.appendChild(taskEditImg);
taskActionsContainerDiv.appendChild(taskDeleteImg);

taskAddDiv.appendChild(addImgTask);

taskDiv.appendChild(taskNameDiv);
taskDiv.appendChild(taskHr);

taskContainerDiv.appendChild(taskDiv);
taskContainerDiv.appendChild(taskAddDiv);

taskListDiv.appendChild(sortByDateDiv);
taskListDiv.appendChild(sortByImportanceDiv);
taskListDiv.appendChild(taskContainerDiv);
taskListDiv.appendChild(taskActionsContainerDiv);

projectActionsContainerDiv.appendChild(editImg);
projectActionsContainerDiv.appendChild(deleteImg);

projectAddDiv.appendChild(addImgProject);

projectDiv.appendChild(bookImg);
projectDiv.appendChild(projectNameDiv);
projectDiv.appendChild(projectHr);

projectContainerDiv.appendChild(projectDiv);
projectContainerDiv.appendChild(projectAddDiv);

projectListDiv.appendChild(projectListTitleDiv);
projectListDiv.appendChild(projectContainerDiv);
projectListDiv.appendChild(projectActionsContainerDiv);

todoListBodyDiv.appendChild(projectListDiv);
todoListBodyDiv.appendChild(taskListDiv);

contentDiv.appendChild(todoListBodyDiv);

todoListHeaderDiv.appendChild(todoListHeaderTitleDiv);
todoListHeaderDiv.appendChild(redButtonImg);

contentDiv.appendChild(todoListHeaderDiv);

function createProject(projectName){
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectImg = document.createElement('img');
    projectImg.src = '../src/assets/book.png';
    projectImg.alt = '';

    const projectNameDiv = document.createElement('div');
    projectNameDiv.className = 'project-name';
    projectNameDiv.innerText = projectName;

    const projectHr = document.createElement('hr');

    projectDiv.appendChild(projectImg);
    projectDiv.appendChild(projectNameDiv);
    projectDiv.appendChild(projectHr);
    projectContainerDiv.appendChild(projectDiv);


    projectContainerDiv.appendChild(projectAddDiv);

}

function createTask(taskName){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const taskNameDiv = document.createElement('div');
    taskNameDiv.className = 'task-name';
    taskNameDiv.innerText = taskName;

    const taskHr = document.createElement('hr');

    taskDiv.appendChild(taskNameDiv);
    taskDiv.appendChild(taskHr);
    taskContainerDiv.appendChild(taskDiv);

    taskContainerDiv.appendChild(taskAddDiv);

}

createProject("asdas");
createTask("taskName1");

createProject("asdas");
createTask("taskName1");



projectAddDiv.addEventListener('click', () => {
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.placeholder = 'Enter project title';
  projectTitleInput.className = 'projectTitleInput';

  const okButton = document.createElement('button');
  okButton.innerText = 'OK';
  okButton.className = 'button-ok';

  const cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.className = 'button-cancel';

  const form = document.createElement('form');
  form.id = "project-form";
  form.appendChild(projectTitleInput);
  form.appendChild(okButton);
  form.appendChild(cancelButton);

  projectAddDiv.replaceWith(form);

  okButton.addEventListener('click', (event) => {
    event.preventDefault();
    const projectName = projectTitleInput.value;
    form.remove();
    createProject(projectName);
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.replaceWith(projectAddDiv);
  });
});







