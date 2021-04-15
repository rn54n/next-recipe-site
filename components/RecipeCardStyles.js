import styled from "styled-components";

export const Card = styled.div`
  transform: rotateZ(-1deg);
`;
export const CardFeatured = styled.div``;
export const CardContent = styled.div`
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  position: relative;
  top: -40px;
  left: -10px;
`;
export const ContentInfo = styled.div`
  padding: 16px;

  > h4 {
    margin: 4px 0;
    text-transform: uppercase;
  }
`;
export const InfoParagraph = styled.p`
  margin: 0;
  color: #777;
`;
export const ContentActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  > a {
    color: #fff;
    background: #f01b29;
    padding: 16px 24px;
    text-decoration: none;
  }
`;
