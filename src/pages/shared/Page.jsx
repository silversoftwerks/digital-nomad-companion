import React from "react";
import Box from "@SS/design-system/src/components/layout/Box";

const Page = ({ children, ...rest }) => (
  <Box tag="section" {...rest} flexDirection="column">
    {children}
  </Box>
);
export default Page;
