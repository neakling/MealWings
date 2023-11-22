import { ChakraProvider, Stack, Box, extendTheme, Flex } from '@chakra-ui/react'

import MenuBox from './components/menuBox/menuBox'
import FilterBox from './components/filterBox/filterBox';
import ContentBox from './components/contentBox/contentBox';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Contacts from './components/contacts/contacts'
import AiHelper from './components/aiHelper/aiHelper'
import Articles from './components/articles/articles'
import Chat from './components/chat/chat'

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
  
const Home = () => {
	return (
		<Flex mt='30px' w='100%'> {/* content */}
			<Flex direction='row' gap='0.5rem' w='100%'>
				<Stack bg='dark.3' mr='16px' maxWidth='270px' minWidth='270px' borderRadius={16}>
					<FilterBox/>
				</Stack>
				<ContentBox/>
			</Flex>
		</Flex>
	)
}

function App() {

	return (
		<ChakraProvider theme={theme}>
			<Box pos='relative' maxWidth={1440} margin="auto" flex='1 1 0%'>
				<Box pt='32px' pb='32px' paddingInline='80px'>
					<Router>
						<MenuBox/>
						<Routes>
							<Route path='/' element={<Home/>}/>
							<Route path='/contacts' element={<Contacts/>}/>
							<Route path='/ai' element={<AiHelper/>}/>
							<Route path='/articles' element={<Articles/>}/>
							<Route path='/chat' element={<Chat/>}/>
						</Routes>
					</Router>
				</Box>
			</Box>
		</ChakraProvider>
	);
}

export default App;