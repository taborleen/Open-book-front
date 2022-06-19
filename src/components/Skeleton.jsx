import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    style={{ marginLeft: 50, marginBottom: 54 }}
    speed={2}
    width={300}
    height={470}
    viewBox="0 0 300 470"
    backgroundColor="#d6d6d6"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="470" />
  </ContentLoader>
);

export default MyLoader;
