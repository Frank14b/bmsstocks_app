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
    }
}

export default Utils;
