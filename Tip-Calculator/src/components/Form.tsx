import "./../App.css";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useGlobalContext from "../context/context";


const Form = () => {
  const buttons: number[] = [5, 10, 15, 25, 50];
  const {
    bill,
    setBill,
    custom,
    setCustom,
    button,
    setButton,
    noOfPeoples,
    setNoOfPeople,
    setPercentage,
  } = useGlobalContext();

  const getPercentage = (button: number, bill: string): number => {
    if (bill === "") {
      return (parseInt("0.00") * button) / 100;
    }
    return (parseInt(bill) * button) / 100;
  };

  const getCustomPercentage = (custom: string, bill: string) => {
    if (custom === "") {
      return (parseInt("0.00") * parseInt(custom)) / 100;
    }
    return (parseInt(bill) * parseInt(custom)) / 100;
  };

  const totalAmount: string = getPercentage(button, bill).toString();
  const customAmount: string = getCustomPercentage(custom, bill).toString();
  console.log(customAmount);

  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value.replace(/[^0-9]/g, "");
    setBill(newValue);
  };

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value.replace(/[^0-9]/g, "");
    setCustom(newValue);
  };

  const handlePeoples = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value.replace(/[^0-9]/g, "");

    setPercentage(totalAmount);
    if (button === 0) {
      setPercentage(customAmount);
    }
    setNoOfPeople(newValue);
  };

  return (
    <>
      <FormControl width={{ lg:"50%", sm:'30%'}} >
        <Box display="flex" flexDirection="column" p="20px">
          <label htmlFor="bill">Bill</label>
          
          <Input
            placeholder="$"
            fontSize="24px"
            textAlign="right"
            id="bill"
            w="95%"
            type="number"
            value={bill}
            onChange={handleBill}
            
          />
        </Box>

        <Box paddingTop="30px" padding="20px">
          <Text fontSize="20px">Select Tip %</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={3} w="100%" columnGap={1}>
            {buttons.map((btn, index) => {
              return (
                <GridItem w="80%" h="80% " key={index}>
                  <Button
                    w="100%"
                    borderRadius="5px"
                    fontSize="20px"
                    bg="hsl(183, 100%, 15%)"
                    color="white"
                    _hover={{ bg: "hsl(186, 14%, 43%)", color: "black" }}
                    name={`${btn}`}
                    onClick={() => setButton(btn)}
                  >
                    ${btn}
                  </Button>
                </GridItem>
              );
            })}

            <GridItem w="80%" h="10">
              <Input
                placeholder="Custom"
                fontSize="24px"
                id="bill"
                w="95%"
                bg="hsl(185, 41%, 84%)"
                type="number"
                value={custom}
                onChange={handleCustom}
              />
            </GridItem>
          </Grid>
          <Box paddingTop="30px">
            <label htmlFor="Number of people">
              Number of people{" "}
              {parseInt(noOfPeoples) === 0 ? (
                <Text textAlign="right" color="red">
                  can't be zero
                </Text>
              ) : null}
            </label>

            <Input
              placeholder="$"
              fontSize="24px"
              id="Number of people"
              w="95%"
              textAlign="right"
              type="number"
              value={noOfPeoples}
              onChange={handlePeoples}
            />
          </Box>
        </Box>
      </FormControl>
    </>
  );
};

export default Form;
