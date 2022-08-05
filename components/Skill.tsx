import { AppBar, Box, Container, Grid, Rating, Toolbar, Typography } from '@mui/material';

export default function Skill() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>Skill</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' sx={{ py: 2 }}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12}><Typography variant='h5' align='center' color='text.primary'>プログラミング言語</Typography></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>C</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>C++</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>C#</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>VB6.0</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>VB.NET</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>Java</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>JavaScript</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>TypeScript</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={3} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>Python</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={12}><Typography variant='h5' align='center' color='text.primary'>フレームワーク</Typography></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>.NET</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>ASP.NET</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={3} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>RichFaces</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={3} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>JSF</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={3} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>Keras</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>Next.js</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={2} max={4} size='large' readOnly /></Grid>
          <Grid item xs={12}><Typography variant='h5' align='center' color='text.primary'>データベース</Typography></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>SQL Server</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>PostgreSQL</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>MySQL</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={4} max={4} size='large' readOnly /></Grid>
          <Grid item xs={6} sm={3}><Typography variant='body1' component='legend' align='center' color='text.primary'>Oracle</Typography></Grid>
          <Grid item xs={6} sm={3}><Rating defaultValue={2} max={4} size='large' readOnly /></Grid>
          <Grid item xs={12}><Typography variant='h5' align='center' color='text.primary'>保有資格</Typography></Grid>
          <Grid item xs={6} sm={6}><Typography variant='body1' align='center' color='text.primary'>基本情報技術者</Typography></Grid>
          <Grid item xs={6} sm={6}><Typography variant='body1' align='center' color='text.primary'>応用情報技術者</Typography></Grid>
          <Grid item xs={6} sm={6}><Typography variant='body1' align='center' color='text.primary'>普通自動車第一種運転免許</Typography></Grid>
        </Grid>
      </Container>
    </>
  )
}
