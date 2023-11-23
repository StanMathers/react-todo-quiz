const Search = () => {
	return (
		<div className="input-group">
			<input
				type="text"
				className="form-control no-focus-border search-bar"
				aria-label="Text input with segmented dropdown button"
				placeholder="Search note..."
			/>
			<button type="button" className="btn search-bar-icon">
				<i className="bi bi-search"></i>
			</button>
		</div>
	);
};

export default Search;
