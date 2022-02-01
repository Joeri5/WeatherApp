import React from "react";

import Card from "./components/Card";

function App() {
  const [loading, setLoading] = React.useState(true);

  return <Card loading={loading} setLoading={setLoading} />;
}

export default App;
