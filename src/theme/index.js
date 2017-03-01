

export const colors = {
    primary: 'rgb(0, 120, 231)',
    font: 'rgb(100, 100, 100)',
    warning: '#e0c949',
    border: 'rgb(180, 180, 180)',
    disabled: 'rgb(250, 250, 250)'
}

export const themeColors = {
    default: {
        color: colors.font,
        borderColor: colors.border
    },
    main: colors.primary,
    backgroundContrast: colors.disabled,
    mainInverse: '#FFFFFF',
    contrast: '#E88E0C',
    warning: {
        color: colors.font,
        borderColor: colors.warning,
        buttonBackground: colors.warning
    },
    danger: '#FF0000',
    variant: '#6A0CE8',
}

export const theme = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '3px',
    height: '2.2rem',
    lineHeight: '2.2rem',
    color: themeColors.main,
    font: {
        default: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        size: '0.9rem',
        buttonSize: '0.8rem'
    }
}
