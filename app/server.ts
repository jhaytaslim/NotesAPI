import * as express from 'express';
import {MongoClient} from 'mongodb';
import db from './config/db';
import routes from './routes'
// const db             = require('./config/db.ts');
const bodyParser     = require('body-parser');
// const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
// const bodyParser     = require('body-parser');
// const db             = require('./config/db');
//const app            = express();
const port = 8090;


class App{
  
  public app;

  constructor(){
    this.app=express();
    this.app.use(bodyParser.urlencoded({extended:true}));
    this.MongoConnect();
  }
  
  private MongoConnect():void{
    MongoClient.connect(db.url,{ uri_decode_auth: true }, (err, database) => {
      if (err) return console.log(err)
      routes(this.app, database);
      this.app.listen(port, () => {
        console.log('We are live on ' + port);
      });               
    })
  }
  
}

export default new App().app