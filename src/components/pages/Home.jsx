import React from "react";
import { event_data } from "../../data/Data";
import Events from "../Events";

const Home = () => {
  return (
    <>
      <Events heading="DATA SCIENCE" eventData={event_data} />
      <Events heading="SOFTWARE ENGINEERING" eventData={event_data} />
      <Events heading="FINANCE & INVESTMENTS" eventData={event_data} />
      <Events heading="ENTREPRENEURSHIP" eventData={event_data} />
    </>
  );
};

export default Home;
