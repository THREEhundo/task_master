const ToDoItem = (title, dueDate, priority, note, project) => {
  title;
  dueDate;
  priority;
  note;
  let finished = false;
  project;

  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getChecklist = () => checklist;
  const getProject = () => project;

  const editTitle = (newTitle) => title = newTitle;
  const editDueDate = (newDueDate) => dueDate = newDueDate;
  const editPriority = (newPriority) => priority = newPriority;
  const editNote = (newNote) => note = newNote;
  const toggleFinished = () => finished = !finished;
  const isFinished = () => finished;

  return {
    getTitle,
    getDueDate,
    getPriority,
    getNote,
    getChecklist,
    getProject,
    editTitle,
    editDueDate,
    editPriority,
    editNote,
    toggleFinished,
    isFinished,
    title,
    dueDate,
    priority,
    note,
    finished,
    project,
  }
}

export default ToDoItem
