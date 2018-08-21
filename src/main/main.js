import React from "react";
import TopSection from "./screens/TopSection";
import ListConversion from "./screens/ListConversion";
import NewConversion from "./screens/NewConversion";

const Main = ()=>{
  return (
    <div className="App">
      <TopSection/>
      <ListConversion/>
      <NewConversion/>
    </div>
  )
};

export default Main;