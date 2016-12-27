const mapDispatchToProps = (
	dispatch,
	ownProps
	)=>{
	return {
		onClick:()=>{
			dispatch({
			type:'SET_VISIBILITY_FILTER',
			filter:ownProps.filter;
			})
		}
	};
};