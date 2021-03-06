// TYPE //
const LOAD = 'portfolio/LOAD'
const CREATE = 'portfolio/CREATE'
const DELETE = 'portfolio/DELETE'
const EDIT = 'portfolio/EDIT'

// ACTION //
const load = portfolios => ({
	type: LOAD,
	portfolios
});

const create = portfolio => ({
	type: CREATE,
	portfolio
});

const remove = portfolio => ({
	type: DELETE,
	portfolio
});

const edit = portfolio => ({
	type: EDIT,
	portfolio
});

// THUNK //
export const getPortfolios = () => async (dispatch) => {
	const response = await fetch(`/api/portfolios/`);
	if (response.ok) {
		const portfolios = await response.json();
		portfolios.portfolios.sort((first, second) => first.id - second.id )
		dispatch(load(portfolios));
		return portfolios;
	}
};

export const createPortfolio = (stock) => async (dispatch) => {
	const response = await fetch('/api/portfolios/', {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(stock),
	})
	if (response.ok) {
		const newPortfolio = await response.json();
		dispatch(create(newPortfolio));
		return newPortfolio;
	}
};

export const removePortfolio = (id) => async (dispatch) => {
	const response = await fetch(`/api/portfolios/${id}`, {
		method: "DELETE",
	});
	if (response.ok) {
		const toDelete = await response.json();
		dispatch(remove(toDelete))
	}
};

export const editPortfolio = ({portfolio_id, share}) => async (dispatch) => {
	const response = await fetch(`/api/portfolios/${portfolio_id}`, {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(share)
	});
	if (response.ok) {
		const toEdit = await response.json();
		dispatch(edit(toEdit));
		return toEdit;
	}
};

// REDUCER //
const portfolioReducer = (state = {}, action) => {
	switch (action.type) {
		case LOAD:
			return {...state, ...action.portfolios};
		case CREATE:
			return {...state, portfolios: [...state.portfolios, action.portfolio]};
		case DELETE:
			const newState = {...state};
			newState.portfolios.forEach((ele, index) => {
				if (ele.id === action.portfolio.id) {
					newState.portfolios.splice(index, 1)
				} 
			})
			return newState
		case EDIT:
			let editState = {...state}
			const portfolio_id = action.portfolio.id
			editState.portfolios.forEach(ele => {
				if (ele.id === portfolio_id) {
					ele.share = action.portfolio.share
				}
			})
			return editState;
		default:
			return state;
	}
};

export default portfolioReducer;