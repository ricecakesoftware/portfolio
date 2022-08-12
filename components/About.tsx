import { AppBar, Avatar, Container, Stack, Toolbar, Typography } from '@mui/material'

export default function About() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>About</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' sx={{ py: 2 }}>
      <Stack direction='row' spacing={8} alignItems='center'>
        <Avatar src='syougatsu_mark_mochi.png' sx={{ height: 128, width: 128 }} />
        <Stack direction='column' spacing={1}>
          <Typography variant='body1' color='text.primary'>
            　1社目のシステム開発会社では約5年間在籍し、システムエンジニアとして
            製造業界、通信業界など様々な業界のシステム開発に従事し、
            組み込みソフトウェアやWindowsアプリケーションの基本設計からシステムテストまで経験いたしました。
          </Typography>
          <Typography variant='body1' color='text.primary'>
            　続いて、2社目のシステム開発会社に転職し、約5年間の在籍中には、システムエンジニアとして
            医療業界、金融業界など様々な業界のシステム開発に従事し、
            WebアプリケーションやWindowsアプリケーションの基本設計からシステムテストまで経験いたしました。
          </Typography>
          <Typography variant='body1' color='text.primary'>
            　その後、現職の3社目の製造会社に転職し、畜産業界向け見守りシステム開発の主にアルゴリズムについて担当しております。 
          </Typography>
        </Stack>
      </Stack>
      </Container>
    </>
  )
}
