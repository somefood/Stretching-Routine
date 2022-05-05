const user = [
    {id: 'lhs', password:'lhs'}
]

const loginInfo = ({id, password}) => {
    const checkUser = user?.some(o => o?.id === id && o?.password === password)
    return checkUser;
}



export {
    loginInfo,
}