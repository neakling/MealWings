
import { Box, HStack, Link, Stack, Input, Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'
import { ChevronUp } from 'react-feather'
import { Hide } from '@chakra-ui/react'

import AvatarIcon from '../avatarIcon/avatarIcon';

const MenuItems = () => {
    return (
        <>
            <HStack display='flex' direction='row' mr='20px' gap={0} flex='1 1 0%' fontSize={14}>
                <Box>
                    <Link fontWeight='700' fontSize={16} mr='15px'>MealWings</Link>
                    <Menu display='flex'>
                        <MenuButton 
                            color={"white"} 
                            as={Button} 
                            ml='10px' 
                            mr='5px' 
                            rightIcon={<ChevronUp size='12px'/>} 
                            variant={"link"}
                            fontSize={"sm"}
                            fontWeight="bold"
                            display={{ base: "none", md: "unset" }}
                            >
                            <Link color='#fff' fontWeight='700' variant='link'>Рецепты</Link> 
                        </MenuButton>
                        
                        <MenuList bg='dark.3' borderColor='dark.1' borderWidth='2px' fontSize='16px' fontWeight='bold'>
                            <MenuItem 
                            _hover={{background: "dark.1",}}  fontWeight='500'
                            bg='dark.3'>Все рецепты</MenuItem>

                            <MenuItem 
                            _hover={{background: "dark.1",}} 
                            bg='dark.3'>Случайный рецепт</MenuItem>
                        </MenuList>
                    
                        <Link fontWeight='bold' ml='10px' mr='5px'>Контакты</Link>
                        <Link fontWeight='bold' ml='10px' mr='5px'>Все статьи</Link>
                        <Link fontWeight='bold' ml='10px' mr='5px'>AI помощник</Link>
                        <Link fontWeight='bold' ml='10px' mr='15px'>Чат</Link>
                    </Menu>
                </Box>

                <Stack flex='1 1 0%'>
                    <Input fontSize='15px' border='' borderRadius='16px' bg='dark.3' placeholder='Поиск рецептов'/>
                </Stack>
            </HStack>

            <Stack direction='row' gap={6}>
                <Hide>
                    <AvatarIcon/>
                </Hide>

                <HStack fontWeight='600' gap={6} display='flex' direction='row'>
                    <Button color='#74707B' fontSize='sm' variant='link'>Войти</Button>
                    <Button color='#74707B' fontSize='sm' variant='link'>Зарегистрироваться</Button>
                </HStack>

            </Stack>
        </>
    )
}

export default MenuItems