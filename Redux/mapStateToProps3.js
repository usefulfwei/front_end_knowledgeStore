// 容器组件的代码
//    <FilterLink filter="SHOW_ALL">
//      All
//    </FilterLink>

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
/*使用ownProps作为参数后，
如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。*/