import pandas as pd

nodes = ["03229610", "03229500", "03228805", "03228750", "03228500", "03228300", "03228689", "03227500", "03227107", "03226800", "03225500", "03223425", "03221646", "03220000", "03219781", "03221000", "03219500", "03217500", "03217424"]


def read_node(node):
    df = pd.read_csv(f"~/pendrive/streamflow/stations/{node}.csv", header=None)
    val = df.iloc[:, 1]
    val.index = pd.to_datetime(df.iloc[:, 0])
    val.name = node
    return val


df = pd.DataFrame({n: read_node(n) for n in nodes})
df.index.name = "date"

df.to_csv("~/work/nadi-project/codes/nadi-system/nadi-ide/examples/scioto.csv")
df.loc[df.index.year > 2000, :].to_csv("~/work/nadi-project/codes/nadi-system/nadi-ide/examples/scioto-2000+.csv")
