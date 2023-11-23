const Search = () => {
	return (
		<div class="input-group">
			<input
				type="text"
				class="form-control search-bar"
				aria-label="Text input with segmented dropdown button"
				placeholder="Search note..."
			/>
			<button type="button" class="btn search-bar-icon">
				<i class="bi bi-search"></i>
			</button>
		</div>
	);
};

export default Search;
