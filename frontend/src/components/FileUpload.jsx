import { useState } from "react";

export default function FileUpload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      console.log(data);

      onUploadSuccess(data);

      alert("Upload successful!");
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h3>Upload dataset</h3>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}