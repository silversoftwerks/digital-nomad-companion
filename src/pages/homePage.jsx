import React from "react";
import ReactDOM from "react-dom";
import Grid from "@SS/design-system/src/components/layout/Grid";
import Icon from "@SS/design-system/src/components/iconography/Icon";
import Box from "@SS/design-system/src/components/layout/Box";
import Text from "@SS/design-system/src/components/typography/Text";
import Link from "@SS/design-system/src/components/interactives/Link";

import Button from "@SS/design-system/src/components/interactives/Button";
import Header from "@SS/design-system/src/components/typography/Header";
import Billboard from "@SS/design-system/src/components/typography/Billboard";
import Logo from "@SS/design-system/src/components/iconography/Logo";
import Page from "./shared/Page.jsx";
// import {
//   colors,
//   colorsAbstract
// } from "@SS/deaign-system/src/components/color/colorStyles";

const HomePage = ({ children, ...rest }) => (
  <Page>
    <Box>
      <Box width="8px" backgroundColor="silver" />

      <Box width="4px" backgroundColor="gold" />

      <Box width="8px" backgroundColor="periwinkle" />
      <Box
        backgroundColor="gray"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Logo label="SS" color="white" />
        <Box
          height="fit-contents"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Header paddingRight="16px" color="white">
            Silver Softwerks
          </Header>
        </Box>
      </Box>
    </Box>
    <Box>
      <Box flexDirection="column" padding="16px">
        <Box flexDirection="column" padding="16px">
          <Header accented>Case Studies</Header>
        </Box>
        <Box flexDirection="column" padding="16px">
          <Header accented>
            A vehicle for perfecting process product and people
          </Header>
          <Box>
            {" "}
            <Text>Products Include</Text>
            <Box
              flexDirection="column"
              paddingLeft="16px"
              paddingTop="16px"
              paddingBottom="16px"
            >
              <Text>Design Systems</Text>
              <Text>Worldclass Web Apps</Text>
              <Text>Innovative Technical Solutions</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        flexDirection="column"
        alignItems="flex-end"
        flexShrink="2"
        padding="16px"
      >
        <Header accented>Contact Us</Header>
        <Box flexDirection="column" padding="16px">
          <Box
            flexDirection="column"
            paddingBottom="16px"
            alignItems="flex-end"
          >
            <Text fontWeight="bold">Github</Text>
            <Link src="">scsilver</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  </Page>
);

export default HomePage;
