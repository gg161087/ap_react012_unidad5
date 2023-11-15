import { useState } from 'react'
import { Box, Text, Button, HStack, Stack } from '@chakra-ui/react'

export const ContadorResponsive = () => {

    const [count, setCount] = useState(100)

    const addCounter = () => {
        setCount((count) => count + 1)
    }

    const subtractCounter = () => {
        count > 0 && setCount((count) => count - 1)
    }

    return (
        <Box height={'100vh'} width='auto' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>            
            <Text m={'2rem'} fontSize={{ base: "2.4rem", md: "4rem", lg: "5.6rem" }} fontWeight='bold'>Contador Interactivo</Text>
            <Box width={'100%'}>
                <HStack justifyContent='space-around'>
                    <Stack alignItems='center' textAlign='center'>
                        <Button 
                            height={{ base: "2.4rem", md: "4rem", lg: "8rem" }}
                            width={{ base: "2.4rem", md: "4rem", lg: "8rem" }}
                            fontSize={{ base: "1.2rem", md: "2.4rem", lg: "4rem" }}
                            fontWeight='bold'
                            colorScheme='green' 
                            onClick={addCounter}
                        >
                        + 
                        </Button>    
                    </Stack>
                    <Stack width={{base: "2rem", md: "4rem", lg: "6.5rem"}} textAlign='center'> 
                        <Text 
                            fontSize={{ base: "1.2rem", md: "2.4rem", lg: "4rem" }}                      
                        >
                        {count}
                        </Text>
                    </Stack>
                    <Stack>
                        <Button                             
                            height={{ base: "2.4rem", md: "4rem", lg: "8rem" }}
                            width={{ base: "2.4rem", md: "4rem", lg: "8rem" }}
                            fontSize={{ base: "1.2rem", md: "2.4rem", lg: "4rem" }}
                            fontWeight='bold'    
                            colorScheme='red' 
                            onClick={subtractCounter}
                        >
                        -
                        </Button>
                    </Stack>
                </HStack>
            </Box>
        </Box>
    )
}