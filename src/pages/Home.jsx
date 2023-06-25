import React, {useState, useEffect} from 'react'
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import {Stack, Box, Typography, Container} from '@mui/material';
const Home = () => { 
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "example"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);
  return (
    <Container>
      {todos.map((todo) => (
          <p
            key={todo.id}
          >
            {todo.name}
          </p>
        ))}
    </Container>
  )
}

export default Home
