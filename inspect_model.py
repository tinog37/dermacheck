import pickle
import sys

try:
    with open('C10000.pkl', 'rb') as f:
        data = pickle.load(f)
    print(f"Type: {type(data)}")
    print(f"Data: {data}")
    if hasattr(data, 'get_params'):
        print(f"Params: {data.get_params()}")
except Exception as e:
    print(f"Error: {e}")
