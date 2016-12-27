const mapDispatchToProps = {
	onClick:(filter)=>{
		type:'SET_VISIBILITY_FILTER',
		filter:filter
	};
}