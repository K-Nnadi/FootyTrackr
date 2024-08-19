import {
    ActionIcon,
    AppShell,
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Group,
    Paper,
    Stack,
    Text,
    TextInput,
    Title
} from '@mantine/core';


export function Footer() {
    return(
        <AppShell.Footer>
            <Paper>
                <Container>
                    <Grid>
                        <Grid.Col span={{ base: 12, xs: 6 }}>
                            {/*<Grid>*/}
                            {/*    <Grid.Col>*/}
                            {/*        <Stack gap="xl">*/}
                            {/*            <Title order={5} c={'neutral.1'}>*/}
                            {/*                Sign up For The Lastest News & Release*/}
                            {/*            </Title>*/}
                            {/*            <Text c={'neutral.2'} fz={'xs'} maw={440}>*/}
                            {/*                {' '}*/}
                            {/*                Sign up to The FootyTrackr newsletter for the newest releases, curated collections and product recommendations tailored to you.*/}
                            {/*            </Text>*/}
                            {/*        </Stack>*/}
                            {/*    </Grid.Col>*/}
                            {/*    <Grid.Col>*/}
                            {/*        <Group mb={'xl'}>*/}
                            {/*            <div>*/}
                            {/*                <input type="input" placeholder="What's your email?" required={false} />*/}
                            {/*                <label htmlFor="name" >*/}
                            {/*                    What's your email?*/}
                            {/*                </label>*/}
                            {/*            </div>*/}
                            {/*            <Button variant={'dark'}>Submit</Button>*/}
                            {/*        </Group>*/}
                            {/*    </Grid.Col>*/}
                            {/*</Grid>*/}
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, xs: 6}}>
                            <Grid>
                                <Grid.Col span={6}>
                                    <Stack gap="xl">
                                        <Title order={5}>Contact Us</Title>
                                        <Group>
                                            <Text fz={'xs'}>Name:</Text>
                                            <Text fz={'xs'}>Kenneth Nnadi</Text>
                                        </Group>
                                        <Group>
                                            <Text fz={'xs'}>Email:</Text>
                                            <Text fz={'xs'}>kenneth_nnadi@aol.co.uk</Text>
                                        </Group>
                                        <Flex justify={'flex-start'} w={'30%'} mt={'lg'}>
                                            {/*<ActionIcon className={classes.footerIcons}>*/}
                                            {/*    <FontAwesomeIcon icon={faLinkedin} size={'2xl'}/>*/}
                                            {/*</ActionIcon>*/}
                                            {/*<ActionIcon className={classes.footerIcons}>*/}
                                            {/*    <FontAwesomeIcon icon={faGithub} size={'2xl'} />*/}
                                            {/*</ActionIcon>*/}
                                        </Flex>
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Paper>
        </AppShell.Footer>
    )
}