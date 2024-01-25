'use client'

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
import { useParams } from 'next/navigation';


export default function TransferPage() {

  const [transferDetailsJson, setTransferDetailsJson] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();

  React.useEffect(()=> {
  const transferDetailsResponse = async () => {
    try {
      console.log("hello")
      const res = await fetch(`/api/transfers/${params.transfer}`);
      const data = res.json();
      setTransferDetailsJson(data)
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
    transferDetailsResponse();
  }, []);
  
  const pricingDetailsJson = {transferId: '1', Fee: '2.02', conversionRate: 0.75}
  
  const feeDetails = () => (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Our Fee : {pricingDetailsJson.conversionFee} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Amount we'll convert : {pricingDetailsJson.convertedAmount} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Conversion Rate : {pricingDetailsJson.conversionRate}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  // TODO: use List component instead of card component (BASIC List)
  const transferDetails = () => (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Funded by : {transferDetailsJson.paymentMode}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          You sent : {transferDetailsJson.sourceAmount} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Box sx={{maxWidth: 300}}>
          <Card variant="outlined">{feeDetails()}</Card>
        </Box>
        
        <Typography variant="h5"  gutterBottom>
          Recipient received : {transferDetailsJson.targetAmount} {transferDetailsJson.targetCurrency}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  
    return (
      loading ? <> </> : 
      <Container maxWidth={false}>
        <Chip label="Transfer 123" color="success" size="medium" ></Chip>
        <Card variant="outlined">{transferDetails()}</Card>
      </Container>
 
    );
}