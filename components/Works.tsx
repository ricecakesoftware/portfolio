import { DesktopWindows, DeveloperBoard, Web } from '@mui/icons-material'
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import useSWR from 'swr'
import Work from './Work'

export default function Works() {
  const { data, error } = useSWR('/api/works', (url: string) => fetch(url).then((res: Response) => res.json()))
  if (error) {
    return (
      <>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>Works</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='sm' sx={{ py: 2 }}>
          <Typography variant='body1' color='red' align='center'>{error.Message}</Typography>
        </Container>
      </>
    )
  } else if (!data) {
    return (
      <>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>Works</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='sm' sx={{ py: 2 }}>
          <Typography variant='body1' color='text.primary' align='center'>読み込み中...</Typography>
        </Container>
      </>
    )
  } else {
    return (
      <>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>Works</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='sm' sx={{ py: 2 }}>
          <Stack direction='column' spacing={2}>
            {data.map((work: any) => (
              <Work icon={work.icon == 'DesktopWindows' ? <DesktopWindows /> : work.icon == 'Web' ? <Web /> : <DeveloperBoard />}
                    name={work.name}
                    scale={work.scale + '名'}
                    roll={work.roll}
                    phase={work.phase}
                    environment={work.os + ' / ' + work.ide} />
            ))}
          </Stack>
        </Container>
      </>
    )
  }
}
