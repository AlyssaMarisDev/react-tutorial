import { Grid, GridItem, Show, useMediaQuery } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={!isMobile}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
