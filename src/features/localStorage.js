export const getFromLocalStorage = (id) => {
    return JSON.parse(localStorage.getItem(id))
}

export const setLocalStorage = (todos) => {
    localStorage.setItem('todos' , JSON.stringify(todos))
}

export const updateLocalStorage = (id, checked) => {
    const oldStorage = getFromLocalStorage('todos')
    const todos = oldStorage.map(todo => todo.id === id ? {...todo, checked}:todo)
    setLocalStorage(todos)
}