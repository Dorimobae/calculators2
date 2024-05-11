import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Image,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon
  } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from "../Logo";
import BmiCalculator from './bmi';
import CalorieCalculator from './caloriecalculator';

export default function Defaultpage() {
  return (
    <Box textAlign="center" fontSize="xl">
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Choosing weight in lbs has bugs!</AlertTitle>
            <AlertDescription>Numbers may be inaccurate if you enter your weight in lbs</AlertDescription>
        </Alert>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <Text fontSize={"4xl"}>Ash's Health Calculators</Text>
        <Text fontsize={"2xl"}>"Hello! Here you'll find calculators used to determine things such as BMI"</Text>
        <BmiCalculator />
        <CalorieCalculator />
      </VStack>
    </Grid>
  </Box>
  );
}