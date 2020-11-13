import ToDoItem from './todoItem';
import Sidebar from './sidebar';
import Projects from './projects';
import ShowAllTasks from './showAllTasks';
import TaskWindow from './taskWindow';
import ListLink from './listLink';
import PriorityLink from './priorityLink';
import { Datepicker } from 'vanillajs-datepicker';

const startUp = () => {
  var todoArray = [];
  Sidebar(todoArray);
}
startUp();

export default startUp
