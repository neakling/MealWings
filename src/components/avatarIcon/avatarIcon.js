import { Box, Stack, Menu, MenuButton, MenuList, 
    MenuItem, Avatar, Text, MenuDivider, Button } from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons'

const AvatarIcon = () => {
    return (
        <>
            <Menu>  
                <MenuButton boxSize={10}>
                    <Avatar size='10'/>
                </MenuButton>
                    <MenuList bg='dark.3' borderColor='dark.1' borderWidth='2px'>
                        <Box display='flex' justifyContent='center'>
                            <Avatar size='xl'/>
                        </Box>
                        <Stack align='center'>
                            <Text>loolteewka</Text>
                            <Text fontSize='sm'>@loolteewka</Text>
                        </Stack>
                        <MenuDivider borderColor='#120b19' borderWidth='1px'/>
                        <MenuItem 
                            _hover={{background: "dark.1",}} 
                            bg='dark.3'>Профиль</MenuItem>
                        <MenuItem 
                            _hover={{background: "dark.1",}} 
                            bg='dark.3'>Закладки</MenuItem>
                        <MenuItem 
                            _hover={{background: "dark.1",}} 
                            bg='dark.3'>Настройки</MenuItem>
                        <MenuItem 
                            _hover={{background: "dark.1",}} 
                            bg='dark.3'>Выйти</MenuItem>
                    </MenuList>
            </Menu>
            <Menu>
                <MenuButton w='40px' h='40px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)'>
                        <AddIcon color='#f1e8ff'/>
                </MenuButton>
                <MenuList bg='dark.3' borderColor='dark.1' borderWidth='2px'>
                    <Stack align='center'>
                        <Button fontSize="sm" color='#fff' w='200px' h='40px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)' >
                            Создать рецепт
                        </Button>
                        <Button fontSize="sm" color='#fff' w='200px' h='40px' borderRadius='24px' bgGradient='linear(to-l, #A453F5, #7833EE)' >
                            Создать статью
                        </Button>
                    </Stack>
                </MenuList>
            </Menu>
        </>
    )
}

export default AvatarIcon;