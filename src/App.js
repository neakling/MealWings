import { ChakraProvider, Stack, Box, extendTheme, Flex } from '@chakra-ui/react'

import MenuBox from './components/menuBox/menuBox'
import FilterBox from './components/filterBox/filterBox';
import ContentBox from './components/contentBox/contentBox';


const theme = extendTheme({
	fonts: {
		body: 'Inter, sans-serif'
	},
    colors: {
		dark: {
			1: "#312142",
			2: "#120b19",
			3: "#251E2C",
      	},
	  lightPurple: '#C298F1'
    },
	styles: {
		global: () => ({
		  body: {
			bg: '',
			color: '#fff',
		  }
		}),
	  },
})
  
function App() {

	return (
			<ChakraProvider theme={theme}>
				<Box pos='relative' maxWidth={1440} margin="auto" flex='1 1 0%'>
					<Box pt='32px' pb='32px' paddingInline='80px'>
						
						<MenuBox/>

						<Flex mt='30px' w='100%'> {/* content */}
							<Flex direction='row' gap='0.5rem' w='100%'>
								<Stack bg='dark.3' mr='16px' maxWidth='270px' minWidth='270px' borderRadius={16}>
									<FilterBox/>
								</Stack>

								<ContentBox/>
								
							</Flex>
						</Flex>
					</Box>
				</Box>
			</ChakraProvider>
	);
}

export default App;