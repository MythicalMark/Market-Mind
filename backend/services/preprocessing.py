import pandas as pd

def clean_data(df):
    df = df.dropna()

    df = df[df["Quantity"] > 0]
    df = df[df["UnitPrice"] > 0]

    df["TotalPrice"] = df["Quantity"] * df["UnitPrice"]

    return df