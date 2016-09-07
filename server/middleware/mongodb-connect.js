import { MongoClient } from './mongodb';

export const connect = ({ connectionString }) => {
  return cb => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(connectionString, (err, db) => {
        if (err) {
          db.close();
          return reject(err);
        }
        return cb(db).then(result => {
          db.close();
          return resolve(result);
        }).catch(error => {
          db.close();
          return reject(error);
        });
      });
    });
  };
};
