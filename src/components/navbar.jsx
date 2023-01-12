import { Grid, GridItem, Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <Grid templateColumns='repeat(9, 1fr)'>
                <GridItem colStart={5} colSpan={4} fontSize='x-large' >Welcome to Giffee!</GridItem>
                <NavLink to={"trending"}>
                    {({ isActive }) => (
                        <GridItem>
                            <Box as='button' borderRadius='md' bg={isActive ? "blue" : "white"} color={isActive ? "white" : "blue"} px={5} h={9}>
                                Trending
                            </Box>
                        </GridItem>
                    )
                    }
                </NavLink>
            </Grid>
        </div>
    )
}

export default NavBar