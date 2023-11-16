import { useState } from 'react'
import { Flex, Box, Text, Button, HStack, Stack } from '@chakra-ui/react'
import { motion, useMotionValueEvent } from 'framer-motion'

const fondo = document.getElementById('fondo')

export const ContadorResponsive = () => {

    const [count, setCount] = useState(0)

    const addCounter = () => {        
        setCount((count) => count + 1)
        
    }

    const subtractCounter = () => {
        count > 0 && setCount((count) => count - 1)
    }

    return (
        <Flex h='100vh' w='100vw' display='flex' flexDirection='column' justifyContent='center' alignItems='center' id='fondo'>            
            <Text m={'2rem'} fontSize={{ base: '2.4rem', md: '4rem', lg: '5.6rem' }} fontWeight='bold'>Contador Interactivo</Text>
            <Box>
                <HStack justifyContent='space-around'>
                    <Stack alignItems='center' textAlign='center'>
                        <Button 
                            as={motion.button}
                            whileHover={{ scale: 1.2, backgroundColor: '#38A169' , color: '#ffffff' }}
                            whileTap={{ scale: 0.9 }}
                            h={{ base: '2.4rem', md: '4rem', lg: '8rem' }}
                            w={{ base: '2.4rem', md: '4rem', lg: '8rem' }}
                            fontSize={{ base: '1.2rem', md: '2.4rem', lg: '4rem' }}                            
                            fontWeight='bold'
                            colorScheme='green' 
                            onClick={addCounter}
                        >
                        + 
                        </Button>    
                    </Stack>
                    <Stack w={{base: '10rem', md: '15rem', lg: '20rem'}} textAlign='center'> 
                        <Text 
                            fontSize={{ base: '1.2rem', md: '2.4rem', lg: '4rem' }}                      
                        >
                        {count}
                        </Text>
                    </Stack>
                    <Stack>
                        <Button 
                            as={motion.button}
                            whileHover={{ scale: 1.2, backgroundColor: (count <= 0 ? '#319795' : '#E53E3E'), color: '#ffffff' }}
                            whileTap={{ scale: 0.9 }}                            
                            h={{ base: '2.4rem', md: '4rem', lg: '8rem' }}
                            w={{ base: '2.4rem', md: '4rem', lg: '8rem' }}
                            fontSize={{ base: '1.2rem', md: '2.4rem', lg: '4rem' }}                            
                            fontWeight='bold'                            
                            bg={count <= 0 ? '#319795' : '#E53E3E'}
                            colorScheme='none'                
                            disabled={count <= 0} 
                            onClick={subtractCounter}
                        >
                        -
                        </Button>
                    </Stack>
                </HStack>
            </Box>
        </Flex>
    )
}