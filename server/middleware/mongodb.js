export { MongoClient, ObjectID } from 'mongodb';

export const composeObject = (entity, insertedObject) => {
  return Object.assign({}, entity, { _id: insertedObject.insertedId });
};
