const todoListDiv = document.getElementById('todo-list');

const todoListHeaderDiv = document.createElement('div');
todoListHeaderDiv.className = 'header';

const todoListHeaderTitleDiv = document.createElement('div');
todoListHeaderTitleDiv.className = 'title';
todoListHeaderTitleDiv.innerText = 'TO:DO';

const redButtonImg = document.createElement('img');
redButtonImg.className = 'red-button';
redButtonImg.src = '../src/assets/red-button2.png';
redButtonImg.alt = '';

const todoListBodyDiv = document.createElement('div');
todoListBodyDiv.className = 'body';

const projectListDiv = document.createElement('div');
projectListDiv.id = 'project-list';

const projectListTitleDiv = document.createElement('div');
projectListTitleDiv.className = 'title';
projectListTitleDiv.innerText = 'Projects';

const projectContainerDiv = document.createElement('div');
projectContainerDiv.className = 'project-container';

const projectAddDiv = document.createElement('div');
projectAddDiv.className = 'project-add';

const addImgProject = document.createElement('img');
addImgProject.src = '../src/assets/add.png';
addImgProject.alt = '';

const projectActionsContainerDiv = document.createElement('div');
projectActionsContainerDiv.className = 'actions-container';

const editImg = document.createElement('img');
editImg.src = '../src/assets/edit.png';
editImg.className = 'project-edit-btn';
editImg.alt = '';

const deleteImg = document.createElement('img');
deleteImg.src = '../src/assets/delete.png';
deleteImg.className = 'project-delete-btn';
deleteImg.alt = '';

const taskListDiv = document.createElement('div');
taskListDiv.id = 'task-list';

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
taskActionsContainerDiv.className = 'actions-container';

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
projectContainerDiv.appendChild(projectAddDiv);

projectListDiv.appendChild(projectListTitleDiv);
projectListDiv.appendChild(projectContainerDiv);
projectListDiv.appendChild(projectActionsContainerDiv);

todoListBodyDiv.appendChild(projectListDiv);
todoListBodyDiv.appendChild(taskListDiv);

todoListDiv.appendChild(todoListBodyDiv);

todoListHeaderDiv.appendChild(todoListHeaderTitleDiv);
todoListHeaderDiv.appendChild(redButtonImg);

todoListDiv.appendChild(todoListHeaderDiv);

var projectNumber = 0;

function createProject(projectName){
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';
    projectDiv.setAttribute('data-project-number', projectNumber);

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

    projectNumber++; 

}

function deleteProject(projectId){
  const projectDiv = document.querySelector(`[data-project-number="${projectId}"]`);
  projectDiv.remove();
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
  projectTitleInput.className = 'title-input';

  const okButton = document.createElement('button');
  okButton.innerText = 'OK';
  okButton.className = 'ok-btn';

  const cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.className = 'cancel-btn';

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

function deleteProject(project) {
  const projectTitleInput = document.createElement('p');
  projectTitleInput.textContent = 'Delete project?';
  projectTitleInput.className = 'delete-text';

  const cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.className = 'cancel-btn';

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.className = 'delete-btn';

  const form = document.createElement('form');
  form.id = "project-form";

  form.appendChild(projectTitleInput);
  form.appendChild(cancelButton);
  form.appendChild(deleteButton);

  project.replaceWith(form);

  
  cancelButton.addEventListener('click', (event) => {
      event.preventDefault();
      form.replaceWith(project);
  });

  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.remove();
  });
}



const projectDeleteBtn = document.querySelector('.project-delete-btn');

projectDeleteBtn.addEventListener('click', () => {
  const projectElements = document.querySelectorAll('.project');
  for (let i = 0; i < projectElements.length; i++) {
      projectElements[i].classList.toggle('tilt-shake');
      projectElements[i].addEventListener('click', () => {
        deleteProject(projectElements[i]);
      })
  }
});


function editProject(project) {
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.placeholder = 'Enter new title name';
  projectTitleInput.className = 'title-input';

  const okButton = document.createElement('button');
  okButton.innerText = 'OK';
  okButton.className = 'ok-btn';

  const cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.className = 'cancel-btn';

  const form = document.createElement('form');
  form.id = "project-form";
  form.appendChild(projectTitleInput);
  form.appendChild(okButton);
  form.appendChild(cancelButton);

  project.replaceWith(form);

  okButton.addEventListener('click', (event) => {
    event.preventDefault();
    var projectName = project.querySelector(".project-name");
    projectName.textContent = projectTitleInput.value;
    form.replaceWith(project);
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.replaceWith(project);
  });
}

const projectEditBtn = document.querySelector('.project-edit-btn');

projectEditBtn.addEventListener('click', () => {
  const projectElements = document.querySelectorAll('.project');
  for (let i = 0; i < projectElements.length; i++) {
      projectElements[i].classList.toggle('tilt-shake');
      projectElements[i].addEventListener('click', () => {
        editProject(projectElements[i]);
      })
  }
});
