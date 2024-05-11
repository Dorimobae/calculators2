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
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
  } from "@chakra-ui/react"
  
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Radio,
    RadioGroup
  } from "@chakra-ui/react"

  export default function BmiCalculator()  {
    const {isOpen, onOpen, onClose} = useDisclosure()
      const [heightFeet, heightFeetCount] = useState(0)
      const [heightInch, heightInchCount] = useState(0)
      const [heightCm, heightCmCount] = useState(0)
      const [weightLb, weightLbCount] = useState(0)
      const [weightKg, weightKgCount] = useState(0)
      const [heightUnitisFt, heightUnitisFtBoolean] = useState(false)
      const [heightUnitisCm, heightUnitisCmBoolean] = useState(false)
      const [weightUnitisKg, weightUnitisKgBoolean] = useState(false)
      const [weightUnitisLb, weightUnitisLbBoolean] = useState(false)
      const [bmiIsCalculated, bmiIsCalculatedBoolean] = useState(false)

      function EditFeetCount(event) {
          heightFeetCount(prevState => event)
      }
      function EditInchCount(event) {
          heightInchCount(prevState => event)
      }
      function EditCmCount(event) {
          heightCmCount(prevState => event)
      }
      function EditLbCount(event) {
          weightLbCount(prevState => event)
          console.log(weightLb)
      }
      function EditKgCount(event) {
          weightKgCount(prevState => event)
          console.log(weightKg)
      }
      function EditHeightUnit(event) {
          if(event == 'Centimeters') {
            heightUnitisCmBoolean(prevState => true)
            heightUnitisFtBoolean(prevState => false)
        } else if
        (event == 'Feet') {
            heightUnitisCmBoolean(prevState => false)
            heightUnitisFtBoolean(prevState => true)
        }
          
      }
      function EditWeightUnit(event) {
          if(event == 'Kilograms') {
              weightUnitisKgBoolean(prevState => true)
              weightUnitisLbBoolean(prevState => false)
          } else if
          (event == 'Pounds') {
              weightUnitisKgBoolean(prevState => false)
              weightUnitisLbBoolean(prevState => true)
          }
      }

      function CalculateBmi() {
          if(heightUnitisCm && weightUnitisKg) {
              let height = heightCm / 2.54
              let weight = weightKg * 2.205

              var bmi = (weight / ( height * height )) * 703
              bmi = Math.round(bmi)
              return bmi
          } else if 
          (heightUnitisFt && weightUnitisKg) {
              let heightFt = heightFeet
              let heightIn = heightInch
              let weight = weightKg * 2.205

              let height = (heightFt * 30.48)+(heightIn * 2.54)
              height += Number(heightIn)

              var bmi = ((weight / ( height * height )) * 703).toFixed(2)
              console.log((weight / ( height * height )) * 703)
             // bmi.toFixed(2)
              
              return bmi
 // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
            } else if
            (heightUnitisCm && weightUnitisLb) {
                let height = heightCm / 2.54
                let weight = weightLb

                var bmi = (weight / ( height * height )) * 703
                console.log((weight / ( height * height )) * 703)
                bmi.toFixed(2)
                
                return bmi
            } else if
            (heightUnitisFt && weightUnitisLb) {
            
                let heightFt = heightFeet
                let heightIn = heightInch
                let weight = weightLb

                let height = (heightFt * 30.48)+(heightIn * 2.54)

                height = height + heightIn
  
                var bmi = (weight / ( height * height )) * 703
        
               bmi.toFixed(2)

                return bmi
            } else return 'Err'
       }
     function ClearAllStates() {
         heightFeetCount(prevState => 0)
         heightInchCount(prevState => 0)
         heightCmCount(prevState => 0)
         weightLbCount(prevState => 0)
         weightKgCount(prevState => 0)
         heightUnitisFtBoolean(prevState => false)
         heightUnitisCmBoolean(prevState => false)
         weightUnitisKgBoolean(prevState => false)
         weightUnitisLbBoolean(prevState => false)
         bmiIsCalculatedBoolean(prevState => false)
     }
     function ClearAllStatesAndExitModal() {
        heightFeetCount(prevState => 0)
        heightInchCount(prevState => 0)
        heightCmCount(prevState => 0)
        weightLbCount(prevState => 0)
        weightKgCount(prevState => 0)
        heightUnitisFtBoolean(prevState => false)
        heightUnitisCmBoolean(prevState => false)
        weightUnitisKgBoolean(prevState => false)
        weightUnitisLbBoolean(prevState => false)
        bmiIsCalculatedBoolean(prevState => false)
        onClose()
    }

       function EvalBmiResults(bmi) {
           let results = {
               WeightClass: '',
               Advice: '',
            }
            if(bmi <= 18.5) {
                results.WeightClass = 'UnderWeight'
                results.Advice = 
                <Text>Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns. So, if you're underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight. <br /><br /> Here are some healthy ways to gain weight when you're underweight: <br />
        <UnorderedList>
            <ListItem>Eat more frequently</ListItem>
            <ListItem>Choose nutrient-rich foods</ListItem>
            <ListItem>Try smoothies and shakes</ListItem>
            <ListItem>Dont drink before meals</ListItem>
            <ListItem>Have an occasional treat</ListItem>
            <ListItem>Exercise</ListItem>
        </UnorderedList>
        </Text>
            } else if(bmi <= 24.9){
                results.WeightClass = 'normal'
                results.Advice =  <Text>You\'re doing good! make sure to always have a healthy diet and exercise!</Text>
            } else if(bmi <= 30){
                results.WeightClass = 'Overweight'
                results.Advice = <Text>being overweight is bad news for both body and mind. Not only can it make someone feel tired and uncomfortable, carrying extra weight puts added stress on the body, especially the bones and joints of the legs. Kids and teens who are overweight are more likely to develop diabetes and other health problems. And overweight adults have a higher chance of getting heart disease.</Text>
            } else if(bmi > 30){
                results.WeightClass = 'Obese'
                results.Advice = <Text>Obesity is a complex disease involving an excessive amount of body fat. Obesity isn't just a cosmetic concern. It is a medical problem that increases your risk of other diseases and health problems, such as heart disease, diabetes, high blood pressure and certain cancers. Consult a doctor.</Text>
            } else return 'err'
            return results
       }

       function SetBmiResultBoolean() {
           bmiIsCalculatedBoolean(prevState => true)
       }
       const bmi = CalculateBmi()
       const results = EvalBmiResults(bmi)

       return (
           <>
           
        <Button onClick={onOpen} colorScheme="teal" variant="outline">Calculate BMI</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          {!bmiIsCalculated &&
          <ModalContent>
            <ModalHeader>BMI Calculator</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl as="fieldset" required errorText="Invalid input">
          <FormLabel as="legend" >Select your preferred weight unit</FormLabel>
          <RadioGroup onChange={EditWeightUnit}>
            <HStack spacing="24px">
              <Radio value="Kilograms">Kilograms (KG)</Radio>
              <Radio value="Pounds">Pounds (LB)</Radio>
            </HStack>
          </RadioGroup>
          <FormHelperText>Kilograms are selected as default if no answer is provided.</FormHelperText>
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
          <RadioGroup onChange={EditHeightUnit}>
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
              <Button onClick={SetBmiResultBoolean} colorScheme="green">Calculate BMI</Button>
            </ModalFooter>
          </ModalContent>
        }
        {bmiIsCalculated &&
               <ModalContent>
               <ModalHeader>RESULTS</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                   <Text textAlign="center">Your BMI is:</Text>
                   <Heading textAlign="center" paddingTop="10px" paddingBottom="3%">{bmi}</Heading>
                   <Text size="sm" textAlign="center">You are in the <b>{results.WeightClass}</b> weight class</Text>
                   <Box paddingLeft="1%"  paddingRight="5%" >
                       <Box padding="5%">
                   <Heading size="md">What does this mean?</Heading>
                   <Box paddingTop="20px">{results.Advice}</Box>
                   </Box>
                   </Box>
               </ModalBody>
               <ModalFooter>
                 <Button colorScheme="red" mr={3} onClick={ClearAllStatesAndExitModal}>
                   Close
                 </Button>
                 <Button onClick={ClearAllStates} colorScheme="red" variant="outline">Go back</Button>
               </ModalFooter>
             </ModalContent>
        }
        </Modal>
        </>
       )
  }