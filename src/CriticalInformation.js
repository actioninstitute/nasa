// CriticalInformation.js
import React from "react";
import { CriticalInformationWrapper } from "./stylecomponent/StyledComponents";

const CriticalInformation = ({ disasterEvent }) => {
  return (
    <CriticalInformationWrapper>
      <h2>Critical Information</h2>
      <p>Emergency Contact Number: {disasterEvent.emergencyContactNumber}</p>
      <p>Shelter Location: {disasterEvent.shelterLocation}</p>
      <p>Evacuation Route: {disasterEvent.evacuationRoute}</p>
    </CriticalInformationWrapper>
  );
};

export default CriticalInformation;