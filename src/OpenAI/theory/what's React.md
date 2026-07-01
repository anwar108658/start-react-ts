# React Interview Notes

## 1. What is React?

React is a JavaScript library for building user interfaces.

- Created by **Meta**
- Uses **components**
- Fast updates using the Virtual DOM

---

## 2. What is SPA?

**SPA = Single Page Application**

Instead of reloading the entire page, React updates only the required UI.

### Examples

- Facebook
- Gmail
- Netflix

---

## 3. What is JSX?

JSX is a syntax extension for JavaScript that lets you write code that looks like HTML.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

React converts JSX into JavaScript function calls.

---

## 4. Is JSX HTML?

❌ No.

JSX looks like HTML but is actually JavaScript syntax.

Example:

```jsx
const element = <h1>Hello</h1>;
```
---

# 🚀 Component

## 5. What is a React component?

A reusable JavaScript function that returns JSX to describe part of the user interface

---

## 6.What are props?

Props (properties) are read-only values passed from a parent component to a child component.

---

## 7. Can a child component modify props?

No. Props are immutable. A child should never change them.

---

