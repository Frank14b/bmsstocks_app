import axios from "axios";
import Utils from "./Utils";

const ApiCalls = {
    user_request: async (body, url, method = "POST") => {

        return await axios({
            method: "POST",
            mode: 'no-cors',
            url: `${process.env.BMSUSERS_API_LINK + url}`,
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': Utils.getLocalStorage("token"),
                'Access-Control-Allow-Origin': '*'
            },
            withCredentials: true,
            credentials: 'same-origin',
        })
    },

    stock_request: async (body, url, method = "POST") => {
        return await axios({
            method: method,
            url: `${process.env.BMSUSERS_API_LINK + url}`,
            data: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': Utils.getLocalStorage("token")
            },
            withCredentials: true,
        })
    },
}

export default ApiCalls;
