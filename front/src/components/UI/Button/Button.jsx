import React from 'react'
import { ButtonS } from './Button.styled';

export default function Button({ type, name}) {
  return (
    <ButtonS type={type}>{name}</ButtonS>
  )
}
