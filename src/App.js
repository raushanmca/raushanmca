import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function fileExist(fileName) {
    let flag = false;
    data.forEach((d) => {
      if (d.name == fileName) {
        flag = true;
      }
    });
    return flag;
  }

  function handleRemove(id) {
    let updatedData = [];
    data.forEach((d) => {
      if (d.name !== id.target.value) updatedData.push(d);
    });

    setData(updatedData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!fileExist(file.name)) {
      let newData = [...data];
      if (file !== undefined) {
        newData.push({ name: file.name });
        setData(newData);
      }
    }
  }

  function handleDownload(event) {
    console.log(event);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>

      {data.map(function (files, i) {
        return (
          <>
            <li>
              <a key={i} href={files.name} onClick={handleDownload}>
                {files.name}
              </a>
              &nbsp;&nbsp;
              <button key="remove" value={files.name} onClick={handleRemove}>
                X
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
}

export default App;
