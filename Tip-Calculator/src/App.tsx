import { Box, Text } from "@chakra-ui/react";
import Form from "./components/Form";
import Output from "./components/Output";

function App() {
  return (
    <>
      <Box
        height={{ lg: "100vh", sm: "100vh" }}
        display={{ lg: "flex", sm: "flex" }}
        alignItems={{ lg: "center", sm: "center" }}
        justifyContent={{ lg: "center", sm: "center" }}
        backgroundColor="hsl(185, 41%, 84%)"
        flexDirection="column"
      >
        <Text fontSize="3xl" textAlign="center">
          SPLI<br></br>TTER
        </Text>
        <Box
          boxShadow="base"
          p="40px"
          rounded="md"
          bg="white"
          w={{ lg: "900px", sm: "auto" }}
          borderRadius="10px"
          display={{ lg: "flex", sm: "flex" }}
          flexDirection={{ lg: "row", sm: "column" }}
          alignItems={{ sm: "center", lg: "stretch" }}
        >
          <Form />
          <Output />
        </Box>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Asif-581">Asif Saba</a>.
        </div>
      </Box>
    </>
  );
}

export default App;
