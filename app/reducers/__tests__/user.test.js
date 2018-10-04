import Actions, { reducer, INITIAL_STATE } from '../user'

const userData = {
                   accessToken: "JfF7TJBzIEUWygEwZYGVBg",
                   client: "aln9k3n9ket4QNUlVor68w",
                   email: "test@gmail.com",
                   uid: "test@gmail.com",
                   nickname: "nickname",
                 }

describe('createUser', () => {
  it('handles createUserRequest', () => {
    const state = reducer(INITIAL_STATE, Actions.createUserRequest('email', 'username', 'password', 'password'))

    expect(state.loading).toBeTruthy()
  })

  it('handles createUserSuccess', () => {
    const state = reducer(INITIAL_STATE, Actions.createUserSuccess(userData))

    expect(state.loading).toBeFalsy()
    expect(state.userData.uid).toBe('test@gmail.com')
    expect(state.userData.client).toBe("aln9k3n9ket4QNUlVor68w")
    expect(state.userData.accessToken).toBe('JfF7TJBzIEUWygEwZYGVBg')
    expect(state.userData.email).toBe('test@gmail.com')
    expect(state.userData.nickname).toBe('nickname')
    expect(state.userLoggedIn).toBeTruthy()    
  })

  it('handles createUserError', () => {
    const state = reducer(INITIAL_STATE, Actions.createUserError('error'))

    expect(state.loading).toBeFalsy()
    expect(state.errorMessage).toBe('error')
  })
})

describe('signInUser', () => {
  it('handles signInUserRequest', () => {
    const state = reducer(INITIAL_STATE, Actions.signInUserRequest('email', 'password'))

    expect(state.loading).toBeTruthy()
    expect(state.errorMessage).toBe(null)
  })

  it('handles signInUserSuccess', () => {
    const state = reducer(INITIAL_STATE, Actions.signInUserSuccess(userData))

    expect(state.loading).toBeFalsy()
    expect(state.userData.uid).toBe('test@gmail.com')
    expect(state.userData.client).toBe("aln9k3n9ket4QNUlVor68w")
    expect(state.userData.accessToken).toBe('JfF7TJBzIEUWygEwZYGVBg')
    expect(state.userData.email).toBe('test@gmail.com')
    expect(state.userData.nickname).toBe('nickname')
    expect(state.userLoggedIn).toBeTruthy()
  })

  it('handles signInUserError', () => {
    const state = reducer(INITIAL_STATE, Actions.signInUserError('error'))

    expect(state.loading).toBeFalsy()
    expect(state.errorMessage).toBe('error')
  })
})
