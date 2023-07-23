import { Grid, Card, CardContent, Typography } from '@mui/material'

interface Props {
  title: string
  subtitile: string
}

const InfoCard = (props: Props): JSX.Element => {
  return (
    <Grid item
        sx={{
          width: '80%'
        }}
    >
      <Card
        elevation={2}
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'background.default'

        }}
      >
        <CardContent sx={{ flex: 3 }}>
          <Typography fontSize={18} lineHeight={1.2} gutterBottom>
            {props.title}
          </Typography>
          <Typography fontSize={14} lineHeight={1.2}>
            {props.subtitile}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default InfoCard
