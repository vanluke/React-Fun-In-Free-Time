import fetch from 'whatwg-fetch';

export default function virtualazeDom(doc, wind) {
  global.document = doc;
  global.window = wind;
  global.window = Object.assign(global.window, fetch);
  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });
}
