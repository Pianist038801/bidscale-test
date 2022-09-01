import { useState } from 'react';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { AlertType } from '../helpers/constants';
import { useAlert } from '../contexts/AlertContext';

const AlertExample = (props) => {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);
  const [type, setType] = useState(AlertType.ERROR);
  const [limit, setLimit] = useState(null);
  const [link, setLink] = useState(null);
  const { addAlert } = useAlert();

  const onSubmit = () => {
    const newAlert = {
      id,
      timeLimit: limit,
      text,
      link,
      alertType: type,
      alertTitle: title,
    };

    addAlert(newAlert);
  }

  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        mt: 10,
        textAlign: 'center',
        fontSize: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb:2,
      }}
    >
      <TextField
        label="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Limit (sec)"
        value={limit}
        type="number"
        onChange={(e) => setLimit(e.target.value)}
        sx={{ mb: 1 }}
      />
      <FormControl sx={{ minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small">Type</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={AlertType.ERROR}>Error</MenuItem>
          <MenuItem value={AlertType.INFO}>Info</MenuItem>
          <MenuItem value={AlertType.SUCCESS}>Success</MenuItem>
          <MenuItem value={AlertType.WARNING}>Warning</MenuItem>
        </Select>
      </FormControl>
      <Button variant="text" onClick={onSubmit}>Submit</Button>
    </Box>
  )
}

export default AlertExample;
