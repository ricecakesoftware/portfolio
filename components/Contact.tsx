import { Email, GitHub, Twitter } from '@mui/icons-material'
import { AppBar, Container, Link, Stack, Toolbar, Typography } from '@mui/material'

export default function Contact() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>Contact</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' sx={{ py: 2 }}>
        <Typography variant='body1' color='text.primary' align='center'>お問い合わせは、SNSかメールにてお願いいたします。</Typography>
        <Stack direction='row' spacing={2} justifyContent='center' sx={{ py: 2 }}>
          <Link href='https://twitter.com/ricecakesw'><Twitter fontSize='large' /></Link>
          <Link href='https://github.com/ricecakesoftware'><GitHub fontSize='large' /></Link>
          <Link onClick={() => { location.href = 'mailto:ricecakesoftware@gmail.com' }}><Email fontSize='large' /></Link>
        </Stack>
      </Container>
    </>
  )
}
