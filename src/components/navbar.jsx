import { Grid, GridItem, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='navbar'>
            <Grid templateColumns='repeat(9, 1fr)'>
                <GridItem colStart={5} colSpan={4} fontSize='x-large' >Welcome to Giffee!</GridItem>
                <Link to={"trending"}>
                    <GridItem>
                        <Box as='button' borderRadius='md' bg='blue' color='white' px={5} h={9}>
                            Trending
                        </Box>
                    </GridItem>
                </Link>
            </Grid>
        </div>
    )
}

export default NavBar