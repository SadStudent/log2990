import * as express from 'express';

import {Message} from '../../../commun/communication/message';

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
            require('mongodb').MongoClient.connect("mongodb://localhost:27017/course_automobile", function(err:any, db:any) {
                var collection = db.collection('options');
                collection.find({}).toArray(function(err:any, docs:any) {
                    message.body = req.body.password === docs[0].value;
                    res.send(JSON.stringify(message));   
                });
                db.close();
            });
        }
    }
}

export = Route;
