import React from "react";
import ReactDOM from "react-dom";
import Grid from "@SS/design-system/src/components/layout/Grid.jsx";
import Column from "@SS/design-system/src/components/layout/Column.jsx";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text.jsx";
import HomePage from './pages/HomePage'
const App = () => (
  <Page>
    <Nav />
    <Box justifyContent="center" alignItems="center">
      <Text>Digital Nomad Companion</Text>
    </Box>
    <Footer />
  </Page>
);
const Footer = () => <Box>Footer</Box>;
const Nav = () => (
  <Box flexDirection="row">
    <Box flexDirection="column">
      <Text>Routes</Text>
      <Text>Map</Text>
      <Text>Itinary</Text>
      <Text>Book</Text>
    </Box>
    <Box>
      <Text>Friends</Text>
    </Box>
    <Box>
      <Text>Events</Text>
    </Box>
  </Box>
);

ReactDOM.render(<HomePage />, document.getElementById("react-root"));
