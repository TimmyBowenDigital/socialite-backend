import request from "request";
import https from "https";

export const getData = () => {
    return new Promise((resolve, reject) => {
        https.get("http://www.google.com", (res: any) => {
            res.on('end', (chunk: any) => {
                if (res.statusCode !== 200) {
                    reject(res.statusCode)
                }
                if(res.err) {
                    resolve(chunk);
                } else {
                    reject(res.err);
                }
            })
        })
    })
}

export const dataManipulation = () => {
    getData().then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })
}