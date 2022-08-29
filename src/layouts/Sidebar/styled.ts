import styled from "styled-components";

type name = "rolename" | "username";

export const Name = styled.div<{ name: name }>`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-transform: ${(props) =>
    props.name === "rolename" ? "capitalize" : "uppercase"};
  opacity: ${(props) => (props.name === "rolename" ? 0.6 : 1)};
`;
