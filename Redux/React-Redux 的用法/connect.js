import {connect} from 'react-redux';
const VisibleTodoList = connect()(TodoList);

/*TodoList是 UI 组件，
VisibleTodoList就是由 React-Redux 
通过connect方法自动生成的容器组件。*/