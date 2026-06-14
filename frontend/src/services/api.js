const API_URL = "http://localhost:8000";

export async function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  return res.json();
}