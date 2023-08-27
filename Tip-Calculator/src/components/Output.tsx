import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import "./../App.css";
import useGlobalContext from "../context/context";

const Output = () => {
  const {
    percentage,
    noOfPeoples,
    bill,
    setBill,
    setNoOfPeople,
    setButton,
    button,
    custom,
    setCustom,
  } = useGlobalContext();

  return (
    <Box
      width={{ lg: "50%", sm: "30%" }}
      bg="hsl(183, 100%, 15%)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      borderRadius="10px"
      padding="20px"
    >
      <Box
        color="white"
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
        padding="20px"
      >
        <Text fontWeight="bold">
          Tip Amount<br></br>
          <span style={{ fontWeight: "lighter" }}>/ person</span>
        </Text>
        <Text fontSize="30px">
          $
          {parseInt(noOfPeoples) > 0 && button !== 0
            ? (parseFloat(percentage) / parseInt(noOfPeoples)).toFixed(2)
            : "0.00"}
        </Text>
      </Box>
      <Box
        color="white"
        display="flex"
        justifyContent="space-between"
        fontSize="20px"
        padding="20px"
      >
        <Text fontWeight="bold">
          Total<br></br>
          <span style={{ fontWeight: "lighter" }}>/ person</span>
        </Text>
        <Text fontSize="30px">
          {parseInt(noOfPeoples) > 0 &&
          bill !== "" &&
          button !== 0 &&
          (button !== 0 || parseInt(custom) !== 0)
            ? "$" +
              (
                parseInt(bill) +
                parseFloat(percentage) / parseInt(noOfPeoples)
              ).toFixed(2)
            : "$0.00"}
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" w="100%">
        <Button
          width="90%"
          onClick={() => {
            setBill("");
            setNoOfPeople("");
            setButton(0);
            setCustom("");
          }}
          _hover={{ backgroundColor: "hsl(184, 14%, 56%)" }}
        >
          RESET
        </Button>
      </Box>
    </Box>
  );
};

export default Output;
