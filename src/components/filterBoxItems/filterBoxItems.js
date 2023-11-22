import { 
    Stack, 
    Text, 
    Divider, 
    NumberInput, 
    NumberInputField, 
    NumberInputStepper, 
    NumberIncrementStepper, 
    Slider, 
    SliderTrack, 
    SliderFilledTrack, 
    Tooltip, 
    SliderThumb, 
    NumberDecrementStepper } from '@chakra-ui/react'

import { Select } from "chakra-react-select";

import { useState } from 'react'

const FilterBoxItems = () => {

	const [sliderValue, setSliderValue] = useState(0)
	const [showTooltip, setShowTooltip] = useState(false)
    
    return (
        <>
            <Text fontSize='17px' fontWeight='bold'>Категории</Text>

            <Select color='gray.400' border='none' borderRadius='16px' bg='dark.2' placeholder='Select...'>
                <option bg='dark.2' value='option1'>Option 1</option>
                <option bg='dark.2' value='option2'>Option 2</option>
                <option bg='dark.2' value='option3'>Option 3</option>
            </Select>

            <Text fontSize='17px' fontWeight='bold'>Ингредиенты</Text>

            <Select color='gray.400' border='none' borderRadius='16px' bg='dark.2' placeholder='Select...'>
                <option bg='dark.2' value='option1'>Option 1</option>
                <option bg='dark.2' value='option2'>Option 2</option>
                <option bg='dark.2' value='option3'>Option 3</option>
            </Select> 

            <Text fontSize='17px' fontWeight='bold'>Исключить ингредиенты</Text>

            <Select color='gray.400' border='none' borderRadius='16px' bg='dark.2' placeholder='Select...'>
                <option bg='dark.2' value='option1'>Option 1</option>
                <option bg='dark.2' value='option2'>Option 2</option>
                <option bg='dark.2' value='option3'>Option 3</option>
            </Select>

            <Divider pt='5px' pb='5px' orientation='horizontal' borderColor='dark.2'/>

            <Text fontSize='17px' fontWeight='bold'>Калории</Text>

            <Stack display='flex' align='stretch' direction='column' gap='0.5rem'>
                <Stack display='flex' direction='row' mb='10px'>
                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>

                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                            <NumberInputStepper>
                                <NumberIncrementStepper borderLeftColor='dark.1'/>
                                <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                            </NumberInputStepper>
                    </NumberInput>
                </Stack>

                <Stack> 
                    <Slider 
                        aria-label='slider-ex-1' 
                        defaultValue={0}
                        id='slider'
                        onChange={(e) => setSliderValue(e)}
                        onMouseEnter={() => setShowTooltip()}
                        onMouseLeave={() => setShowTooltip(false)}
                    >

                        <SliderTrack>
                            <SliderFilledTrack bg='lightPurple'/>
                        </SliderTrack>

                        <Tooltip
                            hasArrow
                            bg='lightPurple'
                            color='white'
                            placement='top'
                            isOpen={showTooltip}
                            label={`${sliderValue} Ккал`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </Stack>
            </Stack>

            <Divider pt='5px' pb='5px' orientation='horizontal' borderColor='dark.2'/>

            <Text fontSize='17px' fontWeight='bold'>Белки</Text>

            <Stack display='flex' align='stretch' direction='column' gap='0.5rem'>
                <Stack display='flex' direction='row' mb='10px'>
                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>

                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>

                <Stack> 
                    <Slider 
                        aria-label='slider-ex-1' 
                        defaultValue={0}
                        id='slider'
                        onChange={(e) => setSliderValue(e)}
                        onMouseEnter={() => setShowTooltip()}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg='lightPurple'/>
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg='lightPurple'
                            color='white'
                            placement='top'
                            isOpen={showTooltip}
                            label={`${sliderValue} Ккал`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </Stack>
            </Stack>

            <Divider pt='5px' pb='5px' orientation='horizontal' borderColor='dark.2'/>

            <Text fontSize='17px' fontWeight='bold'>Жиры</Text>

            <Stack display='flex' align='stretch' direction='column' gap='0.5rem'>
                <Stack display='flex' direction='row' mb='10px'>
                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                            <NumberInputStepper>
                                <NumberIncrementStepper borderLeftColor='dark.1'/>
                                <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                            </NumberInputStepper>
                    </NumberInput>

                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>

                <Slider 
                    aria-label='slider-ex-1' 
                    defaultValue={0}
                    id='slider'
                    onChange={(e) => setSliderValue(e)}
                    onMouseEnter={(e) => setShowTooltip(e.target.value, true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <SliderTrack>
                        <SliderFilledTrack bg='lightPurple'/>
                    </SliderTrack>
                    <Tooltip
                    hasArrow
                    bg='lightPurple'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${sliderValue} Ккал`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </Stack>

            <Divider pt='5px' pb='5px' orientation='horizontal' borderColor='dark.2'/>

            <Text fontSize='17px' fontWeight='bold'>Углеводы</Text>

            <Stack display='flex' align='stretch' direction='column' gap='0.5rem'>
                <Stack display='flex' direction='row' mb='10px'>
                    <NumberInput defaultValue={0} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>

                    <NumberInput defaultValue={15} min={0} max={2000}>
                        <NumberInputField bg='dark.2' border='none' borderRadius='16px' p='0px 32px 0px 16px' h='45px'/>
                        <NumberInputStepper>
                            <NumberIncrementStepper borderLeftColor='dark.1'/>
                            <NumberDecrementStepper borderLeftColor='dark.1' borderTopColor='dark.1'/>
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>

                <Stack> 
                    <Slider 
                        aria-label='slider-ex-1' 
                        defaultValue={0}
                        id='slider'
                        onChange={(e) => setSliderValue(e)}
                        onMouseEnter={(e) => setShowTooltip(e.target.value, true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <SliderTrack>
                            <SliderFilledTrack bg='lightPurple'/>
                        </SliderTrack>
                        <Tooltip
                        hasArrow
                        bg='lightPurple'
                        color='white'
                        placement='top'
                        isOpen={showTooltip}
                        label={`${sliderValue} Ккал`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </Stack>

                <Divider pt='5px' pb='5px' orientation='horizontal' borderColor='dark.2'/>

                <Text fontSize='17px' fontWeight='bold'>Время приготовления</Text>

                <Slider 
                    aria-label='slider-ex-1' 
                    defaultValue={0}
                    id='slider'
                    onChange={(e) => setSliderValue(e)}
                    onMouseEnter={(e) => setShowTooltip(e.target.value, true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <SliderTrack>
                        <SliderFilledTrack bg='lightPurple'/>
                    </SliderTrack>
                    <Tooltip
                        hasArrow
                        bg='lightPurple'
                        color='white'
                        placement='top'
                        isOpen={showTooltip}
                        label={`${sliderValue} Ккал`}
                    >
                        <SliderThumb />
                    </Tooltip>
                </Slider>
            </Stack>
        </>
        
    )
}

export default FilterBoxItems