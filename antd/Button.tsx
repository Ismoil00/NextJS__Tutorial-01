import React from "react";
import { Button as AButton } from "antd";
import styled from "styled-components";


const StyledButton = styled<any>(AButton)`
  color: #cccccc;
  border: 0.1em solid #012625;
  border-radius: 0.5em;
  margin: 0em 1em;
  width: 11.8rem;
  height: 2.5rem;
  cursor: pointer;

`;

export const Button: React.FC<any> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);
