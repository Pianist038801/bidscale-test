import { Box } from '@mui/system';

import AlertManager from './components/AlertManager';
import AlertExample from './components/AlertExample';
import { AlertProvider } from './contexts/AlertContext';

function App() {
  return (
    <AlertProvider>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
      }}>
        <AlertExample />
        <AlertManager />
      </Box>
    </AlertProvider>
  );
}

export default App;
