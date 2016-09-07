import { expect } from 'chai';
import { setItemInLocalstorage,
  getItemFromLocalstorage,
  checkIfObjectIsEmpty,
  removeFromLocalstorage } from './index';

function storageMock() {
  const storage = {};
  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return storage[key] || null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

describe('localStorage middleware', () => {
  beforeEach(() => {
    // mock the localStorage
    window.localStorage = storageMock();
    // mock the sessionStorage
    window.sessionStorage = storageMock();
  });

  it('sets item in localStorage', () => {
    const item = {
      name: 'name'
    };
    setItemInLocalstorage('test', item);
    const inStorage = JSON.parse(window.localStorage.getItem('test'));
    // eslint-disable-next-line no-unused-expressions
    expect(inStorage).to.be.ok;
    expect(inStorage.name).to.be.equal('name');
  });

  it('gets item from localStorage', () => {
    const item = {
      name: 'name'
    };
    setItemInLocalstorage('test', item);
    const inStorage = getItemFromLocalstorage('test');
    // eslint-disable-next-line no-unused-expressions
    expect(inStorage).to.be.ok;
    expect(inStorage.name).to.be.equal('name');
  });

  it('check object is not empty', async () => {
    const item = {
      name: 'name'
    };
    const isEmpty = await checkIfObjectIsEmpty(item);
    // eslint-disable-next-line no-unused-expressions
    expect(isEmpty).to.be.false;
  });

  it('check object is empty', async () => {
    const item = {};
    const isEmpty = await checkIfObjectIsEmpty(item);
    // eslint-disable-next-line no-unused-expressions
    expect(isEmpty).to.be.true;
  });

  it('removies item from localStorage', async () => {
    const item = {
      name: 'name'
    };
    setItemInLocalstorage('test', item);
    const inStorage = removeFromLocalstorage('test');
    // eslint-disable-next-line no-unused-expressions
    expect(inStorage).to.be.undefined;
  });
});
