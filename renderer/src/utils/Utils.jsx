import secureLocalStorage from "react-secure-storage";
import Swal from 'sweetalert2'

const Utils = {
    saveLocalStorage: (key, string) => {
        secureLocalStorage.setItem(key, string);
    },

    getLocalStorage: (key) => {
        let value = secureLocalStorage.getItem(key);
        if (value) {
            return value
        } else {
            return null
        }
    },

    clearLocalStorage: () => {
        secureLocalStorage.clear()
    },

    showAlertToast: (text = "Success", icon = "success", timer = 3000, position = "top-end") => {
        const Toast = Swal.mixin({
            toast: true,
            position: position,
            showConfirmButton: false,
            timer: timer,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: icon,
            title: text
        })
    },

    checkTokenValidity: () => {
        let token = Utils.getLocalStorage("token")
        if(token) {
            let tmp_token = token.split(".")
            if(tmp_token[1]) {
                let exp_date = JSON.parse(atob(tmp_token[1])).exp*1000
                let timer = new Date().getTime()
                if(exp_date < timer) {
                    return false
                }else{
                    return true
                }
            }else {
                return false
            }
        }else {
            return false
        }
    }
}

export default Utils;
