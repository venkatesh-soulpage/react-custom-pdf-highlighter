## react-custom-pdf-highlighter

`react-custom-pdf-highlighter` is a [React](https://reactjs.org/) library that provides annotation experience for PDF documents on web. It is built on top of PDF.js by Mozilla. Text and rectangular highlights are supported. Highlight
data format is independent of the viewport, making it suitable for saving on the
server.

## Install
```jsx

npm i react-custom-pdf-highlighter

or

yarn add react-custom-pdf-highlighter

```


## Usage
```jsx
import  { PopupHighlighter } from 'react-custom-pdf-highlighter';

// Inside of a component's render() method:
render() {
  return (
  <PopupHighlighter 
    features={{ width: 1000, height: 700, top: 100, left: 100 }}
    center=false  // You need to explicitly say "false" for "top" and "left" to work!!
    title='PDF Viewer' // default PDF Viewer
    searchObj=searchObj
    pdfUrl= URL  // URL = pdf_url
    mark=true // true to highlight & default true
/>
  );
}
```

```jsx
import  { CustomHighlighter } from 'react-custom-pdf-highlighter';

// Inside of a component's render() method:
render() {
  return (
    <CustomHighlighter
        searchObj=searchObj
        pdfUrl= URL  // URL = pdf_url
        mark=true // true to highlight & default true
    />
  );
}
```


## DEFAULT - SearchObject
```jsx
searchObj: {
    content: { "text": '' }, // default empty string - required filed
    position: {
        "boundingRect": { "x1": 30, "y1": 30, "x2": 30, "y2": 30, "width": pdf_width || 612, "height": pdf_height || 792 },
        "rects": [{ "x1": 30, "y1": 30, "x2": 30, "y2": 30, "width": pdf_width || 612, "height": pdf_height || 792 }],
        "pageNumber": 1 // default 1
   }
    comment: {
        "text": "",
        "emoji": ""
    }
}
```

### Prior art

[`react-pdf`](https://github.com/wojtekmaj/react-pdf) and
[`react-pdfjs`](https://github.com/erikras/react-pdfjs) only provide React
wrappers for PDF.js and do not have built-in annotation functionality.

[`pdfjs-annotate`](https://github.com/instructure/pdf-annotate.js/) does not
provide text highlights out of the box.

PDF.js provides only viewer:

> [PDF.js is mainly written for reading PDF files, not editing them. Because of that we don't yet support adding any kind of annotations. We do however support rendering a number of annotation types for viewing.](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#is-it-possible-to-add-annotations-to-a-pdf)

See also:

* https://github.com/mozilla/pdf.js
* https://github.com/wojtekmaj/react-pdf
* https://github.com/erikras/react-pdfjs
* https://github.com/instructure/pdf-annotate.js/
* https://blogs.dropbox.com/tech/2016/11/annotations-on-document-previews/


##### I'm trying the demo with my PDF and it is not loading!

Please check the [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on your url. It is required for the cross-domain request.

### Compatibility

Works in Google Chrome, Safari 10+, Firefox 52+. Not tested in Internet
Explorer.
