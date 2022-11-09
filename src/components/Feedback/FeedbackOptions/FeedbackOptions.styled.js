import styled from '@emotion/styled';

export const FeedbackOptionSection = styled.div`
  width: ${props => props.theme.spacing(75)};
`;
export const ButtonsList = styled.ul`
  display: flex;
  gap: ${props => props.theme.spacing(3)};
`;

export const ButtonListItem = styled.li``;

export const Button = styled.button`
  padding: 10px 0;
  border-radius: ${props => props.theme.radii.standard};
  width: ${props => props.theme.spacing(25)};
  cursor: pointer;
  font-weight: bold;

  :hover {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }
`;
