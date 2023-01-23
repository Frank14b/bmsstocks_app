// import  secureLocalStorage  from  "react-secure-storage";

const Utils = {
    saveLocalStorage: (key, string) => {
        window.localStorage.setItem(key, string);
    },

    getLocalStorage: (key) => {
        let value = window.localStorage.getItem(key);
        if(value) {
            return value
        }else{
            return null
        }
    }
}

export default Utils;
