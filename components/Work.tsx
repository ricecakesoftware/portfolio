import { Grid, Stack, Avatar, Typography } from "@mui/material"
import { ReactNode } from "react"

interface Props {
  icon: ReactNode
  name: string
  scale: string
  roll: string
  phase: string
  environment: string
}

export default function Work({ icon, name, scale, roll, phase, environment }: Props) {
  return (
    <>
      <Grid container spacing={1} alignItems='center'>
        <Grid item xs={12}>
          <Stack direction='row' spacing={2} alignItems='center'>
            <Avatar>{icon}</Avatar>
            <Typography variant='body1' component='legend' color='text.primary'>{name}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}><Typography variant='body1' color='text.secondary'>[プロジェクト規模]</Typography></Grid>
        <Grid item xs={7}><Typography variant='body1' color='text.secondary'>{scale}</Typography></Grid>
        <Grid item xs={1} />
        <Grid item xs={4}><Typography variant='body1' color='text.secondary'>[役割]</Typography></Grid>
        <Grid item xs={7}><Typography variant='body1' color='text.secondary'>{roll}</Typography></Grid>
        <Grid item xs={1} />
        <Grid item xs={4}><Typography variant='body1' color='text.secondary'>[担当フェーズ]</Typography></Grid>
        <Grid item xs={7}><Typography variant='body1' color='text.secondary'>{phase}</Typography></Grid>
        <Grid item xs={1} />
        <Grid item xs={4}><Typography variant='body1' color='text.secondary'>[開発環境]</Typography></Grid>
        <Grid item xs={7}><Typography variant='body1' color='text.secondary'>{environment}</Typography></Grid>
      </Grid>
    </>
  )
}
