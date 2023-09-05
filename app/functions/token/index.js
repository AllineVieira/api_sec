import axios from "axios"
import { GRANT_TYPE, CLIENT_ID, CLIENT_SECRET, USER, PASSWORD, URL_TOKEN } from "@/app/constants";

const token = async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var header = new Headers();
    header.append("Content-Type", "Application/x-www-form-urlencoded");

    const data = new URLSearchParams();
    data.append('grant_type', GRANT_TYPE)
    data.append('client_id', CLIENT_ID)
    data.append('client_secret', CLIENT_SECRET)
    data.append('username', USER)
    data.append('password', PASSWORD)

    const { data: { access_token } } = await axios.post(URL_TOKEN, data, header)
    return access_token
}

export default token;