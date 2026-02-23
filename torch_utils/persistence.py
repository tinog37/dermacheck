def _reconstruct_persistent_obj(cls, state=None):
    print(f"Reconstructing {cls}")
    if state:
        print(f"State keys: {state.keys()}")
    obj = cls.__new__(cls)
    if state:
        obj.__setstate__(state)
    return obj
