import * as express from 'express';

import {Message} from '../../../commun/communication/message';

const MONGO_URL: string = "mongodb://localhost:27017/course_automobile";

module Route {

    export class Index {

        public index(req: express.Request, res: express.Response, next: express.NextFunction) {
            const message = new Message();
            message.title = 'Hello';
            message.body = 'World';
            res.send(JSON.stringify(message));
        }

        public auth(req: express.Request, res: express.Response, next: express.NextFunction) {
            const message = new Message();
            message.title = 'Reponse d\'authentification';
            require('mongodb').MongoClient.connect(MONGO_URL, function(err:any, db:any) {
                var collection = db.collection('options');
                collection.find({}).toArray(function(err:any, docs:any) {
                    message.body = req.body.password === docs[0].value;
                    res.send(JSON.stringify(message));   
                });
                db.close();
            });
        }

        public changePassword(req: express.Request, res: express.Response, next: express.NextFunction) {
            const message = new Message();
            message.title = 'Reponse de changement de mot de passe';
            require('mongodb').MongoClient.connect(MONGO_URL, function(err:any, db:any) {
                var collection = db.collection('options');
                collection.updateOne({_id:"password"},{$set: {value:req.body.newPassword}},null, function(err:any, db:any) {
                    message.body = err === null;
                    res.send(JSON.stringify(message));
                })
                db.close();
            });
        }
    }
}

export = Route;
