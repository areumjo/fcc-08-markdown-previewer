import React, { useState } from 'react';
import './App.css';
import Textarea from './cmoponents/Textarea';
import Preview from './cmoponents/Preview';
import Header from './cmoponents/Header';
import Footer from './cmoponents/Footer';

const defaultText = 
`# Headline H1 goes here
## H2
### H3

In-line code block is \`<div></div>\`

Multi-line code block:
\`\`\`
// this is multi-line code:

function multiLineFn(int) {
  if (int === 0) {
    return "This number is 0!";
  }
}
\`\`\`

Link works with \[\], \(\).
This is my **portfolio** [Areum Jo](areumjo.com), visit my portfolio website!
>Me: full stack web developer and scientist.

- This is how you use lists.
  - It is simple and easy!
    - Keep going down, further.

We are talking about image.
![React Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhWkFUVs4kC-AEoGfcHdRhMQvIfFu6JbYQOdNINo_jvi21Dcpf&usqp=CAU)

➡️ now, this is your turn! type anything below! 
-----------------------------------------------
`


function App() {
  const [textMd, setTextMd] = useState(defaultText);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Textarea textMd={textMd} setTextMd={setTextMd}/>
        <span className="divider"></span>
        <Preview textMd={textMd} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
