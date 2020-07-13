
const encrypt = window.btoa;

const decrypt = window.atob;

const setItem = (name, value) => {
    return window.localStorage.setItem(name, encrypt(value))
}

const getItem = (name) => {
    let value = window.localStorage.getItem(name)
    if(value) {
        value = decrypt(value)
    }
    return value
}

const LocalStorage = {
    setItem,
    getItem
}

export default LocalStorage