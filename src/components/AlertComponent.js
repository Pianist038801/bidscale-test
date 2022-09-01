import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const AlertComponent = (props) => {
  const { text, link, alertType, alertTitle } = props;
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: 200,
        height: 50,
        bgcolor: palette[`${alertType}`].main,
        color: palette[`${alertType}`].contrastText,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb:2,
      }}
    >
      { alertTitle }
      <Box sx={{ fontSize: 12, }}>
        { link ? <a href={link} target="_blank" rel="noreferrer">{text}</a> : text }
      </Box>
    </Box>
  )
}

export default AlertComponent;
