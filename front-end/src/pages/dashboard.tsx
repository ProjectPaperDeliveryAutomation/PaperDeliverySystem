import { Container, Grid, Paper } from "@mui/material";

function Dashboard(){
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
            Teams:
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Chart /> */}
                    <p>Show Teams Infor here</p>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            Projects:
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    {/* <Deposits /> */}
                     <p>Show Projects Infor</p>
                </Paper>
            </Grid>
            <Grid item xs={12}>
            Students:
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    {/* <Orders /> */}
                    <p>Show Studnets Infor</p>
                </Paper>
            </Grid>
        </Grid>
        {/* <Copyright sx={{ pt: 4 }} /> */}
    </Container>
    )
}

export default Dashboard;