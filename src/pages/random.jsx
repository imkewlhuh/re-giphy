import { Card, CardBody, Text } from '@chakra-ui/react'

function RandomPage() {
    return (
        <div className='card'>
            <Card align='center' height='80vh' width='85vw' padding='40' margin='5'>
                <CardBody>
                    <Text>This is the Random page</Text>
                </CardBody>
            </Card>
        </div>
    )
};

export default RandomPage