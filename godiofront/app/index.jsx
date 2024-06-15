import { Redirect } from "expo-router";
import React from "react";

const index = () => {
  return <Redirect href="/inicio/home" />;
  //return <Redirect href="/test/test" />;
};

export default index;
