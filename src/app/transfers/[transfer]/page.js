
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListItem } from '@mui/material';

export default function TransferPage({transfer}) {
  // const transferDetails = await fetch('/api/v1/transfers/${transfer.id}')
  const transferDetailsJson = {fundingMethod : 'Bank Transfer', sourceAmount: 500, sourceCurrency: 'SGD', targetAmount: 370.81, targetCurrency: 'USD'}
  const feeDetailsJson = {conversionFee: '2.80', convertedAmount: 497.20, conversionRate: 0.75}
  
  const feeDetails = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Our Fee : {feeDetailsJson.conversionFee} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Amount we'll convert : {feeDetailsJson.convertedAmount} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Conversion Rate : {feeDetailsJson.conversionRate}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  // TODO: use List component instead of card component (BASIC List)
  const transferDetails = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Funded by : {transferDetailsJson.fundingMethod}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          You sent : {transferDetailsJson.sourceAmount} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Box sx={{maxWidth: 300}}>
          <Card variant="outlined">{feeDetails}</Card>
        </Box>
        
        <Typography variant="h5"  gutterBottom>
          Recipient received : {transferDetailsJson.targetAmount} {transferDetailsJson.targetCurrency}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  
    return (
      <Container maxWidth={false}>
        <Chip label="Transfer 123" color="success" size="medium" ></Chip>
        <Card variant="outlined">{transferDetails}</Card>
        
        


      </Container>
 
    );
}