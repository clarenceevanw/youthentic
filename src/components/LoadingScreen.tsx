
import React from 'react';
import styled from 'styled-components';
import Loader from './ui/Loader';

const OverlayWrapper = styled.div`
  position: fixed;
  inset: 0; // (shortcut untuk top: 0, left: 0, right: 0, bottom: 0)
  background: #0a0a0a; // Pakai background hitam yang solid
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; // Pastikan dia di paling depan
`;

const LoadingScreen = () => {
  return (
    <OverlayWrapper
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
      <Loader />
    </OverlayWrapper>
  );
}

export default LoadingScreen;