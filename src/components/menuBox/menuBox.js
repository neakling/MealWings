import { Box, Flex } from '@chakra-ui/react'

import MenuItems from '../menuItems/menuItems'

const MenuBox = () => {
    return (
        <Box bg='dark.2' pos='sticky' top='0' zIndex='200' w='100%'>
			<Flex align='center' minHeight='60px' >
				<MenuItems/>
			</Flex>
		</Box>
    )
}
export default MenuBox