import { useState } from "react"
import FileUploader from "./FileUploader"


const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const domain = 'http://localhost:3001'

  async function submitForm(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target);

    const res = await fetch(domain + '/api/upload', {
      method: ev.target.getAttribute('action') || 'POST',
      body: formData,
    });

    const resBody = await res.json()
    console.log(resBody);
    setUploadedFiles([...resBody.data]);

    return false;
  }

  return (
    <div className="App">
      <form action="POST" onSubmit={submitForm}>
        <div>
          <label>name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>file</label>
          <input type="file" name="files" multiple />
        </div>

        <button>Submit</button>
      </form>
      <br />
      {uploadedFiles && uploadedFiles.map(f =>
      (<div>
        <a href={f.Location}>{f.Key}</a>
        <br />
        <img src={f.Location} alt={f.Key} style={{ 'max-width': "300px", 'max-height': "200px" }} />
      </div>))
      }
    </div>
  );
};
export default App;
