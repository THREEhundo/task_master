import ShowAllTasks from './showAllTasks';

const PriorityLink = () => {
  const showPrioritySidebar = () => {
    let projectArr = [];
    const prioritySidebar = document.querySelector('#priority');
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));
    const dropdownContainer = document.createElement('div');
    dropdownContainer.id = 'priority-submenu-container';

    for (let task in oldTasks) {
      projectArr.push(oldTasks[task].priority);
    }

    let uniqueProjects = [...new Set(projectArr)];

    const ul = document.createElement('ul');
    ul.id = 'priority-submenu';

    uniqueProjects.forEach((item, i) => {
      const li = document.createElement('li');
      li.id = `priority-${i}`;

      const link = document.createElement('a');
      link.id = `priority-link-${i}`;
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
        showList.sortByPriority(item);
      });

      prioritySidebar.appendChild(dropdownContainer);
      dropdownContainer.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(link);
    });

  }

  return {
    showPrioritySidebar
  }
}

export default PriorityLink
