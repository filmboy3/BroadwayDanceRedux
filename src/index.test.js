import { addMessage, addUser } from "./js/actions";
import * as types from './js/constants/ActionTypes';

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'Me',
      id: 0
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'Me',
      id: 1
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'Tony'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})