import styled from 'styled-components';
import { Typography as MaterialTypography } from '@material-ui/core';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  width: 100%;
  max-width: 800px;
  margin: auto;
`
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.2em;
  justify-content: space-between;
`

export const Container = styled.div`
  margin-top: 1.2em;
`

export const Typography = styled(MaterialTypography)`
  margin-top: 1.2em;
  text-align: center;
`
export const ButtonSaveContainer = styled.div`
  & > :last-child {
    margin-left: 1.2em;
  }
`