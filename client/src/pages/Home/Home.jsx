import React from "react";
import Records from "../../components/Records/Records";
import Form from "../../components/Form/Form";

const Home = () => {
  return (
    <div className="flex container mx-auto gap-4">
      <Records />
      <Form />
    </div>
  );
};

export default Home;
