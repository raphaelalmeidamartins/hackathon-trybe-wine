import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DetailsRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

const DetailsRowGreen = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #E5F2D9;
  border-radius: 8px;
  margin: 12px 0;
  padding: 8px;

  p {
    margin: 0;
  }
`;

const RightAlignedParagraph = styled.p`
  text-align: right;
`;

function PurchaseDetails() {
  const checkoutInfo = useSelector((state) => state.checkout);
  const {
    subscriptionPlan, total, totalWithDiscount, discount, totalDivided,
  } = checkoutInfo;

  return (
    <Container component="section" maxWidth="lg">
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        <HiOutlineShoppingBag />
        <span style={{ paddingLeft: '8px', paddingTop: '2px' }}>Detalhes</span>
      </h2>
      <DetailsRow component="section">
        <p>Plano</p>
        <p>{subscriptionPlan === 'annual' ? 'Anual' : 'Mensal'}</p>
      </DetailsRow>
      <DetailsRow component="section">
        <p>Subtotal</p>
        <p>{`R$ ${total.toFixed(2)}`}</p>
      </DetailsRow>
      {subscriptionPlan === 'annual' && (
        <DetailsRow component="section">
          <DetailsRowGreen>
            <p>Presente do plano:</p>
            <RightAlignedParagraph>2 taças esclusivas</RightAlignedParagraph>
          </DetailsRowGreen>
        </DetailsRow>
      )}
      <DetailsRow component="section">
        <DetailsRowGreen>
          <p>Desconto</p>
          <p>{`- R$ ${discount.toFixed(2)}`}</p>
        </DetailsRowGreen>
      </DetailsRow>
      <DetailsRow component="section">
        <Box component="section">
          <p>Valor total</p>
        </Box>
        <Box component="section">
          <RightAlignedParagraph>{`R$ ${totalWithDiscount.toFixed(2)}`}</RightAlignedParagraph>
          <RightAlignedParagraph>
            <span style={{ fontSize: '1.2rem' }}>
              {'té 12x '}
            </span>
            <span style={{ fontSize: '2rem', fontWeight: '600' }}>{`R$${totalDivided.toFixed(2)}`}</span>
          </RightAlignedParagraph>
        </Box>
      </DetailsRow>
    </Container>
  );
}

export default PurchaseDetails;
