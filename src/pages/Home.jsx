import { Stack, VStack, Box } from '@chakra-ui/react'

import { ContadorResponsive } from '../components/ContadorResponsive.jsx';

export const Home = () => {
    return (
        <Box height={'100vh'} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <VStack>
                <Stack>
                    <ContadorResponsive></ContadorResponsive>
                </Stack>
            </VStack>
        </Box>
    )
}