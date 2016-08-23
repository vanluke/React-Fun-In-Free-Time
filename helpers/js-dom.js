export default function virtualazeDom(doc, wind) {
  global.document = doc;
  global.window = wind;

  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });
}
