import React from "react";

import Header from "./components/Header";
import ButonsRow from "./components/ButonsRow";
import EventList from "./components/EventList";

const App = () => {
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <ButonsRow />
        <EventList />
      </main>
    </body>
  );
};

export default App;
