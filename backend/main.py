from fastapi import FastAPI, UploadFile, File
import pandas as pd
import shutil
import os

from services.preprocessing import clean_data
from services.rfm import calculate_rfm
from services.clustering import cluster_customers
from fastapi.middleware.cors import CORSMiddleware
from services.summary import generate_segment_summary
from services.playbook import generate_marketing_playbook
from services.cohort import generate_cohort
from services.insights import generate_insights

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)



@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    df = pd.read_csv(file_path)

    df = clean_data(df)
    rfm = calculate_rfm(df)
    result = cluster_customers(rfm)
    summary = generate_segment_summary(result)
    playbook = generate_marketing_playbook(summary)
    cohort = generate_cohort(df)
    insights = generate_insights(summary)

    return {

"message":"Analysis completed",
"customers":result.to_dict(orient="records"),
"segments":summary.to_dict(orient="records"),
"playbook":playbook,
"cohort":cohort.reset_index().to_dict(orient="records"),
"insights":insights,


}