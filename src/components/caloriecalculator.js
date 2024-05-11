import React, { useState } from 'react'
import {
    Text,
    Heading,
    HStack, Box, Button, UnorderedList, ListItem
  } from '@chakra-ui/react';
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from "@chakra-ui/react"
  
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react"
  
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Radio,
    RadioGroup,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
  } from "@chakra-ui/react"

  export default function CalorieCalculator()  {

    // ALL STATES
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [heightFeet, heightFeetCount] = useState(0)
    const [heightInch, heightInchCount] = useState(0)
    const [heightCm, heightCmCount] = useState(0)
    const [weightKg, weightKgCount] = useState(0)
    const [weightLb, weightLbCount] = useState(0)
    const [userAge, ageCount] = useState(0)
    const [userActivityIsSedentary, userActivityIsSedentaryBoolean] = useState(false)
    const [userActivityIsLight, userActivityIsLightBoolean ] = useState(false)
    const [userActivityisModerate, userActivityIsModerateBoolean ] = useState(false)
    const [userActivityIsActive, userActivityIsActiveBoolean ] = useState(false)
    const [userIsMale, userIsMaleBoolean] = useState(false)
    const [userisFemale, userIsFemaleBoolean] = useState(false)
    const [weightUnitisKg, weightUnitisKgBoolean] = useState(false)
    const [weightUnitisLb, weightUnitisLbBoolean] = useState(false)
    const [heightUnitisFt, heightUnitisFtBoolean] = useState(false)
    const [heightUnitisCm, heightUnitisCmBoolean] = useState(false)
    const [amrIsCalculated, amrIsCalculatedBoolean] = useState(false)

    //ALL FUNCTIONS

    function EditFeetCount(event) {
        heightFeetCount(prevState => event)
    }
    
    function EditInchCount(event) {
        heightInchCount(prevState => event)
    }

    function EditCmCount(event) {
        heightCmCount(prevState => event)
    }

    function EditKgCount(event) {
        weightKgCount(prevState => event)
    }

    function EditLbCount(event) {
        weightLbCount(prevState => event)
    }

    function EditAgeCount(event) {
        ageCount(prevState => event)
    }

    function SwitchUserActivityStatus(event) {
        if(event == 'Sedentary') {
            userActivityIsSedentaryBoolean(prevState => true)
            userActivityIsLightBoolean(prevState => false)
            userActivityIsModerateBoolean(prevState => false)
            userActivityIsActiveBoolean(prevState => false)
        } else
        if(event == 'Light') {
            userActivityIsSedentaryBoolean(prevState => false)
            userActivityIsLightBoolean(prevState => true)
            userActivityIsModerateBoolean(prevState => false)
            userActivityIsActiveBoolean(prevState => false)
        } else
        if(event == 'Moderate') {
            userActivityIsSedentaryBoolean(prevState => false)
            userActivityIsLightBoolean(prevState => false)
            userActivityIsModerateBoolean(prevState => true)
            userActivityIsActiveBoolean(prevState => false)
        } else
        if(event == 'Active') {
            userActivityIsSedentaryBoolean(prevState => false)
            userActivityIsLightBoolean(prevState => false)
            userActivityIsModerateBoolean(prevState => false)
            userActivityIsActiveBoolean(prevState => true)
        }
    }

    function EditWeightOption(event) {
        if(event == 'Kilograms') {
            weightUnitisKgBoolean(prevState => true)
            weightUnitisLbBoolean(prevState => false)
        } else if
        (event == 'Pounds') {
            weightUnitisLbBoolean(prevState => true)
            weightUnitisKgBoolean(prevState => false)
        }
    }

    function EditHeightOption(event) {
        if(event == 'Centimeters') {
            heightUnitisCmBoolean(prevState => true)
            heightUnitisFtBoolean(prevState => false)
        } else if
        (event == 'Feet') {
            heightUnitisFtBoolean(prevState => true)
            heightUnitisCmBoolean(prevState => false)
        }
    }

    function EditGenderOption(event) {
        if(event == 'Male') {
            userIsMaleBoolean(prevState => true)
            userIsFemaleBoolean(prevState => false)
        } else if
        (event == 'Female') {
            userIsFemaleBoolean(prevState => true)
            userIsMaleBoolean(prevState => false)
        }
    }
    //Men: BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    //Women: Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)

    function CalculateBmr() {
        if(heightUnitisCm && weightUnitisKg) {
            let height = heightCm
            let age = userAge
            let weight = weightKg
            if(userIsMale) {
                let Bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
            } else 
            if(userisFemale) {
                let Bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2)
            }
        } else
        if(heightUnitisFt && weightUnitisKg) {
            let heightft = heightFeet
            let heightin = heightInch
            let age = userAge
            let weight = weightKg
            let height = (heightft * 30.48)+(heightin * 2.54)

            if(userIsMale) {
                let Bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
                return Bmr
            } else 
            if(userisFemale) {
                let Bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2)
                return Bmr
            }
        } else
        if(heightUnitisCm && weightUnitisLb) {
            let height = heightCm
            let age = userAge
            let weight = weightLb / 2.205

            if(userIsMale) {
                let Bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
                return Bmr
            } else
            if(userisFemale) {
                let Bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2)
                return Bmr
            }
        } else 
        if(heightUnitisFt && weightUnitisLb) {
            let height = (heightFeet * 30.48)+(heightInch * 2.54)
            let weight = weightLb / 2.205
            let age = userAge

            if(userIsMale) {
                let Bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2)
                return Bmr
            } else
            if(userisFemale) {
                let Bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2)
                return Bmr
            }
        }
    }

    function CalculateAmr(BMR) {
        if(userActivityIsSedentary) {
            var AMR = BMR * 1.2
            return AMR
        } else

        if(userActivityIsLight) {
            var AMR = BMR * 1.375
            return AMR
        } else

        if(userActivityisModerate) {
            var AMR = BMR * 1.55
            return AMR
        } else

        if(userActivityIsActive) {
            var AMR = BMR * 1.9
            return AMR
        }
    }
    /*
       const [heightFeet, heightFeetCount] = useState(0)
    const [heightInch, heightInchCount] = useState(0)
    const [heightCm, heightCmCount] = useState(0)
    const [weightKg, weightKgCount] = useState(0)
    const [weightLb, weightLbCount] = useState(0)
    const [userAge, ageCount] = useState(0)
    const [userActivityIsSedentary, userActivityIsSedentaryBoolean] = useState(false)
    const [userActivityIsLight, userActivityIsLightBoolean ] = useState(false)
    const [userActivityisModerate, userActivityIsModerateBoolean ] = useState(false)
    const [userActivityIsActive, userActivityIsActiveBoolean ] = useState(false)
    const [userIsMale, userIsMaleBoolean] = useState(false)
    const [userisFemale, userIsFemaleBoolean] = useState(false)
    const [weightUnitisKg, weightUnitisKgBoolean] = useState(false)
    const [weightUnitisLb, weightUnitisLbBoolean] = useState(false)
    const [heightUnitisFt, heightUnitisFtBoolean] = useState(false)
    const [heightUnitisCm, heightUnitisCmBoolean] = useState(false)
    const [amrIsCalculated, amrIsCalculatedBoolean] = useState(false)
    */
    function ClearAllStates() {
        heightFeetCount(prevState => 0)
        heightInchCount(prevState => 0)
        heightCmCount(prevState => 0)
        weightKgCount(prevState => 0)
        weightLbCount(prevState => 0)
        weightKgCount(prevState => 0)
        ageCount(prevState => 0)
        userActivityIsSedentaryBoolean(prevState => false)
        userActivityIsLightBoolean(prevState => false)
        userActivityIsModerateBoolean(prevState => false)
        userActivityIsActiveBoolean(prevState => false)
        userIsMaleBoolean(prevState => false)
        userIsFemaleBoolean(prevState => false)
        weightUnitisKgBoolean(prevState => false)
        weightUnitisLbBoolean(prevState => false)
        heightUnitisCmBoolean(prevState => false)
        heightUnitisFtBoolean(prevState => false)
        amrIsCalculatedBoolean(prevState => false)
    }

    function ClearAllStatesAndExitModal() {
        heightFeetCount(prevState => 0)
        heightInchCount(prevState => 0)
        heightCmCount(prevState => 0)
        weightKgCount(prevState => 0)
        weightLbCount(prevState => 0)
        weightKgCount(prevState => 0)
        ageCount(prevState => 0)
        userActivityIsSedentaryBoolean(prevState => false)
        userActivityIsLightBoolean(prevState => false)
        userActivityIsModerateBoolean(prevState => false)
        userActivityIsActiveBoolean(prevState => false)
        userIsMaleBoolean(prevState => false)
        userIsFemaleBoolean(prevState => false)
        weightUnitisKgBoolean(prevState => false)
        weightUnitisLbBoolean(prevState => false)
        heightUnitisCmBoolean(prevState => false)
        heightUnitisFtBoolean(prevState => false)
        amrIsCalculatedBoolean(prevState => false)
        onClose()
    }

    function SetAmrResultBoolean() {
        amrIsCalculatedBoolean(prevState => true)
    }

    const bmr = CalculateBmr()
    const amr = CalculateAmr(bmr)

    return (
        <>
        
        <Button onClick={onOpen} colorScheme="teal" variant="outline">Calculate AMR</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          {!amrIsCalculated &&
          <ModalContent>
            <ModalHeader>AMR Calculator</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl as="fieldset" required errorText="Invalid input">
            <FormLabel as="legend" paddingTop="10px">How Active are you?</FormLabel>
          <RadioGroup onChange={SwitchUserActivityStatus} paddingTop="10px">
            <HStack spacing="24px">
              <Radio value="Sedentary">Sedentary</Radio>
              <Radio value="Light">Light</Radio>
              <Radio value="Moderate">Moderate</Radio>
              <Radio value="Active">Active</Radio>
            </HStack>
          </RadioGroup>
            <FormLabel as="legend" paddingTop="30px">What is your gender?</FormLabel>
          <RadioGroup onChange={EditGenderOption} paddingTop="10px">
            <HStack spacing="24px">
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </HStack>
          </RadioGroup>
          <FormLabel as="legend" paddingTop="30px">Select your preferred weight unit</FormLabel>
          <RadioGroup onChange={EditWeightOption} paddingTop="10px">
            <HStack spacing="24px">
              <Radio value="Kilograms">Kilograms (KG)</Radio>
              <Radio value="Pounds">Pounds (LB)</Radio>
            </HStack>
          </RadioGroup>
          {weightUnitisKg &&
          <>
          <FormLabel as="legend" id="number1" paddingTop="30px">Enter your weight in kilograms below</FormLabel>
          <NumberInput isRequired min={1} max={250} onChange={EditKgCount}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>Please enter your weight!</FormErrorMessage>
        </>
  }
            {weightUnitisLb &&
          <>
          <FormLabel as="legend" id="number1" paddingTop="30px">Enter your weight in pounds below</FormLabel>
          <NumberInput isRequired min={1} max={500} onChange={EditLbCount}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>Please enter your weight!</FormErrorMessage>
        </>
  }
                <FormLabel as="legend" paddingTop="30px">Select your preferred height unit</FormLabel>
          <RadioGroup onChange={EditHeightOption} paddingTop="10px">
            <HStack spacing="24px">
              <Radio value="Centimeters">Centimeters (CM)</Radio>
              <Radio value="Feet">Feet (FT)</Radio>
            </HStack>
          </RadioGroup>
          <FormErrorMessage>Please choose an option!</FormErrorMessage>
        {heightUnitisCm &&
        <>
        <FormLabel as="legend" paddingTop="30px">Enter your height in centimeters below below</FormLabel>
          <NumberInput isRequired min={1} max={250} onChange={EditCmCount}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>Please enter your height!</FormErrorMessage>
        </>
        }
        {heightUnitisFt &&
        <>
              <FormLabel as="legend" paddingTop="30px">Enter your height in Feet and inches below below</FormLabel>
              <FormLabel as="legend" paddingTop="10px">Feet</FormLabel>
              <NumberInput isRequired min={1} max={15} onChange={EditFeetCount}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel as="legend" paddingTop="10px">Inches</FormLabel>
              <NumberInput isRequired min={0} max={12} onChange={EditInchCount}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            </>
  }
                    </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={SetAmrResultBoolean}>Calculate BMI</Button>
            </ModalFooter>
          </ModalContent>
        }
        {amrIsCalculated &&
               <ModalContent>
               <ModalHeader>RESULTS</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                   <Text textAlign="center">Your AMR is:</Text>
                   <Heading textAlign="center" paddingTop="10px" paddingBottom="3%">{amr}</Heading>
                   <Text size="sm" textAlign="center">You are in the <b></b> weight class</Text>
                   <Box paddingLeft="1%"  paddingRight="5%" >
                       <Box padding="5%">
                   <Heading size="md">What does this mean?</Heading>
                   <Box paddingTop="20px"></Box>
                   </Box>
                   </Box>
               </ModalBody>
               <ModalFooter>
                 <Button colorScheme="red" mr={3} onClick={ClearAllStatesAndExitModal}>
                   Close
                 </Button>
                 <Button colorScheme="red" variant="outline" onClick={ClearAllStates}>Go back</Button>
               </ModalFooter>
             </ModalContent>
        }
        </Modal>
        </>
    )
  }