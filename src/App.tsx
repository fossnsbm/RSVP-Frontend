import React from "react";
import { useHelloQuery } from "./generated/graphql";

import LoadingButton from "@mui/lab/LoadingButton";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function App() {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return (
      <LoadingButton loading variant="outlined">
        Loading...
      </LoadingButton>
    );
  } else if (!data) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">Something went wrong</Alert>
      </Stack>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> hello world </h1>
        <code>{JSON.stringify(data, null, 2)}</code>
      </header>
    </div>
  );
}

export default App;
