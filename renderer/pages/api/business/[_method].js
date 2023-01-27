export default function handler(req, res) {

    let method = req.query._method

    switch (method) {
        case "signin":
            loginUsers(req, res)
            break;
        case "signup":
            registerUsers(req, res)
            break;
        default:
            res.status(400).json({ mssg: "Unauthorized access" })
            break;
    }

    const loginUsers = (req, res) => { // login users
        try {
            axios({
                method: 'post',
                url: process.env.BMSUSERS_API_LINK + 'users/signin',
                data: req.body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                res.status(200).json({ data: response, status: 200 })
            }).catch((err) => {
                res.status(200).json({ mssg: err, status: 400 })
            })
        } catch (error) {
            res.status(200).json({ mssg: error, status: 400 })
        }
    }

    const registerUsers = (req, res) => { // login users
        try {
            axios({
                method: 'post',
                url: process.env.BMSUSERS_API_LINK + 'users/signup',
                data: req.body,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                res.status(200).json({ data: response, status: 200 })
            }).catch((err) => {
                res.status(200).json({ mssg: err, status: 400 })
            })
        } catch (error) {
            res.status(200).json({ mssg: error, status: 400 })
        }
    }
}
