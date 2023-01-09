import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function TabBar() {
    return (
        <div className='tabs'>
            <Tabs orientation='vertical'>
                <TabList>
                    <Link to={"trending"}><Tab>Trending</Tab></Link>
                    <Link to={"random"}><Tab>Random</Tab></Link>
                    <Link to={"search"}><Tab>Search</Tab></Link>
                </TabList>
            </Tabs>
        </div>
    )
};

export default TabBar