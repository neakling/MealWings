import { Stack, Box, Flex, Grid, Link, HStack, VStack, Text, Center } from '@chakra-ui/react'

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { BiBookmark } from 'react-icons/bi';

const ContentBox = () => {
    return (
        <VStack display='flex' direction='column' w='100%' gap={4}>
            <Stack w='100%'>
                <Stack w='100%'>
                    <Box>
                        <Grid templateColumns='repeat(4, 1fr)' gap={4} width='100%' mb='15px'>
                            <Link mr='25px'>
                                <HStack>
                                    <Flex 
                                        borderRadius={16}
                                        w='100%' 
                                        height='300' 
                                        bg="url('/assets/n3.jpg')"
                                        bgPosition="center"
                                        bgRepeat="no-repeat"
                                        bgSize='cover'
                                        direction='row'
                                        justifyContent='end'
                                        padding='9px'
                                    >
                                        <VStack >
                                            <Flex justifyContent='center' align='center' width='30px' height='30px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)'>
                                                <BiBookmark fontWeight='bold'/>
                                            </Flex>
                                        </VStack>
                                    </Flex>
                                </HStack>
                            </Link>
                            <Link mr='25px'>
                                <HStack>
                                    <Flex 
                                        borderRadius={16}
                                        w='100%' 
                                        height='300' 
                                        bg="url('/assets/n3.jpg')"
                                        bgPosition="center"
                                        bgRepeat="no-repeat"
                                        bgSize='cover'
                                        direction='row'
                                        justifyContent='end'
                                        padding='9px'
                                    >
                                        <VStack >
                                            <Flex justifyContent='center' align='center' width='30px' height='30px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)'>
                                                <BiBookmark fontWeight='bold'/>
                                            </Flex>
                                        </VStack>
                                    </Flex>
                                </HStack>
                            </Link>
                            <Link mr='25px'>
                                <HStack>
                                    <Flex 
                                        borderRadius={16}
                                        w='100%' 
                                        height='300' 
                                        bg="url('/assets/n3.jpg')"
                                        bgPosition="center"
                                        bgRepeat="no-repeat"
                                        bgSize='cover'
                                        direction='row'
                                        justifyContent='end'
                                        padding='9px'
                                    >
                                        <VStack >
                                            <Flex justifyContent='center' align='center' width='30px' height='30px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)'>
                                                <BiBookmark fontWeight='bold'/>
                                            </Flex>
                                        </VStack>
                                    </Flex>
                                </HStack>
                            </Link>
                            <Link mr='25px'>
                                <HStack>
                                    <Flex 
                                        borderRadius={16}
                                        w='100%' 
                                        height='300' 
                                        bg="url('/assets/n3.jpg')"
                                        bgPosition="center"
                                        bgRepeat="no-repeat"
                                        bgSize='cover'
                                        direction='row'
                                        justifyContent='end'
                                        padding='9px'
                                    >
                                        <VStack >
                                            <Flex justifyContent='center' align='center' width='30px' height='30px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)'>
                                                <BiBookmark fontWeight='bold'/>
                                            </Flex>
                                        </VStack>
                                    </Flex>
                                </HStack>
                            </Link>
                        </Grid>
                    </Box>
                </Stack>
            </Stack>

            <HStack 
                display='flex'
                w='100%'
                fontWeight='600'
            >
                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='13px'
                    pb='13px'
                    px='15px'
                >
                    <Center>
                        <ChevronLeftIcon fontSize={18}/>
                    </Center>
                </Flex> 
        
                <Flex
                    bg='dark.1' 
                    borderRadius='12px' 
                    pt='10px'
                    pb='10px'
                    px='15px'
                >
                    <Center>
                        <Text>1</Text>
                    </Center>
                </Flex> 
                
                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='10px'
                    pb='10px'
                    px='15px'
                >
                    <Center>
                        <Text>2</Text>
                    </Center>
                </Flex> 
        
                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='10px'
                    pb='10px'
                    px='15px'
                >
                    <Center>
                        <Text>3</Text>
                    </Center>
                </Flex> 

                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='10px'
                    pb='10px'
                    px='15px'
                >
                    <Center>
                        <Text>...</Text>
                    </Center>
                </Flex> 
                
                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='10px'
                    pb='10px'
                    px='15px'
                >
                    <Text>15</Text>
                </Flex> 
        
                <Flex
                    bg='dark.3' 
                    borderRadius='12px' 
                    pt='13px'
                    pb='13px'
                    px='15px'
                >
                    <Center>
                        <ChevronRightIcon fontSize={18}/>
                    </Center>
                </Flex> 
            </HStack>
        </VStack>
    )
}

export default ContentBox;