import * as types from '../constants/ActionTypes'

const auth = (state = [], action) => {
	switch (action.type) {
		case types.ADMIN_LOGIN:
			return state.concat([
				{
					adminLoggedIn: true,
				}
				])
		default:
			return state
	}
}

export default auth;