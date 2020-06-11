import * as express from "express";
import * as api from "./../scripts/dataGrab"

export const register = ( app: express.Application ) => {

    app.get("/", (req: any, res ) => {
        res.send("this is the home endpoint");
    });

    app.get("/login", (req, res) => {
        res.send("this is the login endpoint");
    });

    app.get("/logout", (req: any, res) => {
        res.send("this is the logout endpoint")
    });

    app.get("/posts", (req: any, res) => {
       res.send("this is the posts endpoint")
    });

    app.get("/account", (req: any, res) => {
        res.send(api.dataManipulation())
    })
};