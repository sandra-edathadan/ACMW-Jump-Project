---
title: FastAPI Basics
sidebar_label: FastAPI
description: The basics to building high-performance APIs and websites with FastAPI.
---

# Introduction to FastAPI: A High-Performance Web Framework

FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be easy to use while providing features like automatic interactive documentation, asynchronous support, and built-in validation.

> An API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other.

## Setting Up FastAPI

### Installation
To get started with FastAPI, install it using pip:
```bash
pip install fastapi uvicorn
```
`uvicorn` is an ASGI server that runs FastAPI applications.

### Creating a Basic API

Create a Python file (e.g., `main.py`) and add the following code:
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "query": q}
```

### Running the API Server
Run the server with:
```bash
uvicorn main:app --reload
```
This starts the development server with automatic reloading enabled.

## Conclusion
FastAPI is a powerful and easy-to-use web framework for building high-performance APIs in Python. Try it out and experience the simplicity and speed of FastAPI!

---

*This post is part of my learning journey in web frameworks and APIs.*