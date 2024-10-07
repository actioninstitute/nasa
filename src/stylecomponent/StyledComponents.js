// stylecomponent/StyledComponents.js
import styled from 'styled-components';

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FilterWrapper = styled.div`
  padding: 8px;
  background: white;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const TimelineWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const CriticalInformationWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const CollaborationToolsWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  color: red;
`;

export const LoadingSpinner = styled.div`
  width: 120px;
  height: 60px;
  border-radius: 200px 200px 0 0;
  -webkit-mask: repeating-radial-gradient(farthest-side at bottom ,#0000 0,#000 1px 12%,#0000 calc(12% + 1px) 20%);
  background:
   radial-gradient(farthest-side at bottom,#514b82 0 95%,#0000 0) bottom/0% 0% no-repeat
   #ddd;
  animation: l10 2s infinite steps(6);
@keyframes l10 {
    100% {background-size:120% 120%}
`;