import { Outlet } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
import TabBar from "../components/tab-bar";
import NavBar from "../components/navbar";

function Layout() {
    return (
        <>
        <NavBar />
        <Grid templateColumns='repeat(9, 1fr)'>
            <GridItem h='88vh' bg='blue.100'>
                <TabBar />
            </GridItem>
            <GridItem colSpan={8} >
                <Outlet />
            </GridItem>
        </Grid>
        </>
    )
};

export default Layout