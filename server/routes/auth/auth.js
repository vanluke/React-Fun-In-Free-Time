import parse from 'co-body';
import sha256 from 'sha256';
import config from '../../../server.config';
import { connect, composeObject, createJWT } from '../../middleware';

const mc = config.get('mongodb');
console.log(composeObject);
const connectionString
  = `${mc.pref}${mc.user}:${mc.pass}${mc.url}`;

const mdb = connect({ connectionString });

const getEntity = ({ userName, password }) => {
  return db => {
    return new Promise((resolve, reject) => {
      db.collection('users').findOne({
        userName: userName,
        password: password },
        (err, res) => {
          console.log(err, res);
          if (err) {
            return reject(err);
          }
          return resolve(res);
      });
    });
  }
};

export const getToken = async function() {
  const body = await parse(this);
  const entity = hashPassword(body);
  const user = await mdb(getEntity(entity));
  this.body = createJWT(user);
  this.status = 201;
};

const mongoDbInsertUser = (db, entity, resolve, reject) => {
  db.collection('users').insertOne(entity, (err, result) => {
    if (err) {
      return reject(err);
    }
    const response = composeObject(entity, result);
    return resolve(response);
  });
};

const insert = (entity) => {
  return db => {
    return new Promise((resolve, reject) => {
      db.collection('users').findOne({ userName: entity.userName },
        (err, res) => {
          if (err) {
            return reject(err);
          }
          if (!res) {
            return mongoDbInsertUser(db, entity, resolve, reject);
          }
          return reject('User exists');
      });
    });
  }
};

const hashPassword = (entity) =>
  Object.assign({}, entity, { password: sha256(entity.password) });

export const create = async function() {
  const body = await parse(this);
  const entity = hashPassword(body);
  const token = await mdb(insert(entity));
  this.body = 'User created successfuly!';
  this.status = 201;
};
