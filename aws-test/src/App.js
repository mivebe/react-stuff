import { useState } from "react"
import FileUploader from "./FileUploader"


const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [location, setLocation] = useState(null);
  const domain = 'http://localhost:3001'


  async function submitForm(ev) {
    ev.preventDefault()
    const formData = new FormData(ev.target);
    // formData.append("name", name);
    // formData.append("file", selectedFile);

    // axios
    //   .post(UPLOAD_URL, formData)
    //   .then((res) => {
    //     alert("File Upload success");
    //   })
    //   .catch((err) => alert("File Upload Error"));

    const res = await fetch(domain + '/api/upload', {
      method: ev.target.getAttribute('action') || 'POST',
      body: formData,
    })
    const resBody = await res.json()
    console.log(resBody);
    setLocation(resBody.data.Location);
    setName(resBody.data.key);

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
          <input type="file" name="file" />
        </div>

        <button>Submit</button>
      </form>
      <br />
      {location &&
        <>
          <a href={location}>{name}</a>
          <br />
          <img src={location} alt={name} />
        </>
      }
    </div>
  );
};
export default App;
