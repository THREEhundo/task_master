import ShowAllTasks from './showAllTasks';

const ListLink = (lists) => {
  // Create links sorted by list name in A-Z order
  const oldTasks = JSON.parse(localStorage.getItem('TaskList'));

  const showProjectsSidebar = () => {
    let projectArr = [];
    const dropdownContainer = document.createElement('div');
    dropdownContainer.id = 'link-submenu-container';

    for (let task in oldTasks) {
      projectArr.push(oldTasks[task].project);
    }

    let uniqueProjects = [...new Set(projectArr)];

    const ul = document.createElement('ul');
    ul.id = 'projects';

    uniqueProjects.forEach((item, i) => {
      const li = document.createElement('li');
      li.id = `project-${i}`;

      const link = document.createElement('a');
      link.id = `project-link-${i}`;
      link.innerHTML = item;
      link.addEventListener('click', (e) => {
        const allTasksWindow = document.querySelector('.task-container-display');
        const detailContainer = document.querySelector('#task-detail-window');
        if (allTasksWindow) {
          allTasksWindow.remove();
        }
        if (detailContainer) {
          detailContainer.remove();
        }
        e.stopPropagation();
        const showList = ShowAllTasks();
        showList.sortByList(link);
      });

      lists.appendChild(dropdownContainer);
      dropdownContainer.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(link);
    });
  }

  return {
    showProjectsSidebar,
  }
}

export default ListLink
