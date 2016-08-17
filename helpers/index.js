import jsdom from 'jsdom';
import './middleware';
import virtualazeDom from './js-dom';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

virtualazeDom(doc, win);
