'use client'

import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'next/navigation';

import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export default function TransferPage() {

  const [transferDetailsJson, setTransferDetailsJson] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();

  React.useEffect(()=> {
  const transferDetailsResponse = async () => {
    try {
      const res = await fetch(`/api/transfers/${params.transfer}`);
      const data = await res.json();
      setTransferDetailsJson(data.result[0])
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
    transferDetailsResponse();
  }, []);
  
  const getConvertAmount = (sourceAmount, fee) => {
    return parseFloat(sourceAmount) - parseFloat(fee);
  }

  const getTargetAmount = (amountToConvert, conversionRate) => {
    return amountToConvert * conversionRate;
  }

    //Task 2: Still debating if we should include this as part of task
  const feeDetails = () => (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5"  gutterBottom>
          Our Fee : {transferDetailsJson.fee} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Amount we'll convert : {getConvertAmount(transferDetailsJson.sourceAmount, transferDetailsJson.fee)} {transferDetailsJson.sourceCurrency}
        </Typography>
        <Typography variant="h5"  gutterBottom>
          Conversion Rate : {transferDetailsJson.conversionRate}
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
          Recipient received : {getTargetAmount(getConvertAmount(transferDetailsJson.sourceAmount,
            transferDetailsJson.fee), transferDetailsJson.conversionRate)} {transferDetailsJson.targetCurrency}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
  
    return (
      loading ? <> </> : 
      <>
      <ResponsiveAppBar />
      <p></p>
      <Container maxWidth={false}>
        <Chip label={`Transfer ${params.transfer}`} color="success" size="medium" ></Chip>
        <Card variant="outlined">{transferDetails()}</Card>
      </Container>
      </>
 
    );
}