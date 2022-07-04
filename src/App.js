import React from "react";

import Header from "./components/Header";
import ButonsRow from "./components/ButonsRow";
import EventList from "./components/EventList";

const App = () => {
  return (
    <div>
      <Header />
      <ButonsRow />
      <EventList />
    </div>
  );
};

export default App;
