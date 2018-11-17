import {MongoClient} from 'mongodb';
import {process} from './config/index';
import {routes} from './routes'

import bodyParser = require('body-parser');
import express = require('express');

class App{
  
  public app;

  constructor(){
    this.app=express();
    this.app.use(bodyParser.urlencoded({extended:true}));
    this.MongoConnect();
  }
  
  private MongoConnect():void{
    MongoClient.connect(process.db.url,{ uri_decode_auth: true }, (err, database) => {
      if (err) return console.log(err)
      routes(this.app, database);
      this.app.listen(process.env.PORT.dev, () => {
        console.log('We are live on ' + process.env.PORT.dev);
      });               
    })
  }
  
}

export default new App().app