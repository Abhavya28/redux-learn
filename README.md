# Redux Learn

This repository is created to learn, understand, and practice **Redux** and **Redux Toolkit** using React.

Redux is a state management library that helps manage **global application state** in a predictable way, especially when data needs to be shared across multiple components.

---

## 🔁 What is Redux

Redux follows a **single source of truth**:
- The entire app state lives inside a **store**
- State can only be updated by **dispatching actions**
- **Reducers** decide how the state changes based on actions

Redux Toolkit simplifies Redux by reducing boilerplate and providing best practices by default.

---

## 📁 Included Folders

### 1. redux-basics
This folder focuses on learning **Redux fundamentals**.

Concepts covered:
- Store and global state
- Actions and reducers
- Dispatching actions
- State flow in Redux
- Using Redux Toolkit with React

📂 Folder: `redux-basics/`

---

### 2. shopping-cart
A mini Shopping Cart project built to apply Redux concepts in a real-world scenario.

Features:
- Add products to cart
- Increase or decrease product quantity
- Remove items from cart
- Calculate total cart amount using global state

This project helps understand how Redux manages shared state across components.

📂 Folder: `shopping-cart/`

---

### 3. counter
A simple Counter project created to practice the basic concepts of Redux and Redux Toolkit.

Features:
- Increment count
- Decrement count
- Reset counter
- Increment by custom value

This project helps understand how Redux manages and updates global state using actions, reducers, and dispatching actions from components.

📂 Folder: `counter/`

---

### 4. thunk-practice
A basic Post App created to understand asynchronous state management using Redux Toolkit thunks.

Features:
- Fetch posts from API
- Fetch users from API
- Add new posts
- Update and delete posts
- Manage loading and error states

This project helps understand how `createAsyncThunk` works with APIs and how asynchronous actions are handled inside Redux Toolkit.

📂 Folder: `thunk-practice/`

---

## 🛠 Tech Stack
- React
- Redux Toolkit
- React Redux
- JavaScript

---

## 🎯 Purpose
To build a strong foundation in Redux and gain hands-on experience by creating a small practical project.
