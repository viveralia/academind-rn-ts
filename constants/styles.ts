import { Theme } from "@react-navigation/native"

export const globalStyles = {
  colors: {
    primary50: '#e4d9fd',
    primary100: '#c6affc',
    primary200: '#a281f0',
    primary400: '#5721d4',
    primary500: '#3e04c3',
    primary700: '#2d0689',
    primary800: '#200364',
    accent500: '#f7bc0c',
    error50: '#fcc4e4',
    error500: '#9b095c',
    gray500: '#39324a',
    gray700: '#221c30',
  },
} as const

export const theme: Theme = {
  colors: {
    background: globalStyles.colors.primary700,
    border: 'transparent',
    card: globalStyles.colors.primary500,
    notification: globalStyles.colors.primary500,
    primary: globalStyles.colors.accent500,
    text: globalStyles.colors.primary50
  },
  dark: false
}
