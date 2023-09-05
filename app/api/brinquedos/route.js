import { URL_API } from "@/app/constants";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
    const req = await request.json()
    const { accessToken } = req;

    try {
        const data = await getBrinquedos(accessToken);
        const brinquedos = data.brinquedos

        return NextResponse.json(brinquedos, {
            status: 200,
        })
    } catch (err) {
        return NextResponse.json(err.message, {
            error: err.message,
        }, {
            status: 500,
        })
    }
}

async function getBrinquedos(token) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
   
    try {
    const data = await axios.get(URL_API, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    return data.data;
   } catch (err) {
    return err
   }
}