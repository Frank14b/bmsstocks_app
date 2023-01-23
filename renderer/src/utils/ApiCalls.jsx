import Utils from "./Utils";

const ApiCalls = {
    user_request: (body, url, method = "POST") => {
        return axios({
            method: method,
            url: `http://localhost:8765/api/${url}`,
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Utils.getLocalStorage("token")
            }
        })
    },

    stock_request: (body, url, method = "POST") => {
        return axios({
            method: method,
            url: `http://localhost:8765/api/${url}`,
            data: body,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Utils.getLocalStorage("token")
            }
        })
    },
}

export default ApiCalls;
