import { AppBar, Avatar, Box, Chip, Container, Stack, Toolbar, Typography } from '@mui/material'
import { Image } from 'mui-image'
import About from '../components/About'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Works from '../components/Works'

export default function Index() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>Portfolio</Typography>
        </Toolbar>
      </AppBar>
      <Box component='main'>
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Image src='hero.png' />
        </Container>
        <Container maxWidth='md'>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='center'>
            <Chip color='primary' avatar={<Avatar>W</Avatar>} label='Works' component='a' href='#Works' />
            <Chip color='primary' avatar={<Avatar>S</Avatar>} label='Skill' component='a' href='#Skill' />
            <Chip color='primary' avatar={<Avatar>A</Avatar>} label='About' component='a' href='#About' />
            <Chip color='primary' avatar={<Avatar>C</Avatar>} label='Contact' component='a' href='#Contact' />
          </Stack>
        </Container>
        <Container sx={{ py: 8 }} maxWidth='md'>
          <Stack direction='column' spacing={8}>
            <Box id='Works' component='article'>
              <Works />
            </Box>
            <Box id='Skill' component='article'>
              <Skill />
            </Box>
            <Box id='About' component='article'>
              <About />
            </Box>
            <Box id='Contact' component='article'>
              <Contact />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box component='footer'>
        <Typography variant='body2' color='text.secondary' align='center'>© 2022 Rice Cake Software</Typography>
      </Box>
    </>
  )
}
