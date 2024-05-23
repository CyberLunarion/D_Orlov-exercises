import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './button.css'

export default function BasicButton() {
  return (
    <Stack spacing={2}>
        <h1 id='message'>Hello World!</h1>
        <Button variant='contained' onClick={() => {
            document.getElementById("message").innerHTML = "Bye World!";
        }}>Click me</Button>
    </Stack>
  );
}