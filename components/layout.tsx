import React from "react"
import { Spacer, useTheme } from '@nextui-org/react';

import { Grid, Card, Text } from "@nextui-org/react";
import Connect from "../components/connect";

export default function Layout({ children }) {
    const { theme } = useTheme();

  return (
    <Grid.Container justify="center">
      <Grid>
        <Connect/>
      </Grid>
      <Spacer y={5} />
      <Grid>
        <main>{children}</main>
      </Grid>
    </Grid.Container>
  );
}
