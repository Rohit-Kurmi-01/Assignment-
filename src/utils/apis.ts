const ALL_USERS_KEY = 'users'

export const getFromLocalStorage = (key:string): undefined|string =>{
    const value =  localStorage.getItem(key )
    return JSON.parse(value) ?? undefined
}

export const setToLocalStorage = (key:string,value:unknown) =>{
    localStorage.setItem(key,JSON.stringify(value))
}


export const getAllUsers = ()=>{
    return  getFromLocalStorage(ALL_USERS_KEY) ?? []
}

export const createUser = (payload:ISignUpPayload)=>{
    const users :unknown[] = getAllUsers()
    users.push(payload)
    setToLocalStorage(ALL_USERS_KEY,users)
}


export const getAUserByEmail = (email:string)=>{
    const users :unknown[] = getAllUsers()
    return users.find((user)=>user?.email == email)
}


export const validateUser=(payload:ISignUpPayload)=>{
    const user = getAUserByEmail(payload.email)
    if(!user || user?.password != payload.password){
        return {error:true}
    }
    return {success:true}
}

interface ISignUpPayload{
    email:string
    password:string
    name?:string
}

export const onSignUp = (payload:ISignUpPayload)=>{
    if(getAUserByEmail(payload.email)) return { error:true }
    createUser(payload)
    return {success:true}
}

export const signIn = (payload:ISignUpPayload)=>{
    const user = validateUser(payload)
    if(user.success){
        setToLocalStorage('token',payload.email)
    }
    return user
}
