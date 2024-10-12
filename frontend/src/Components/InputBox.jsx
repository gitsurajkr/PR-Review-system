import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function InputBox({ input, type }) {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }} // Set width to 100% for responsive design
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    className='rounded-lg shadow-sm bg-white w-full'
                    required
                    id="outlined-required"
                    label={input}
                    type={type}
                    variant="outlined" // Use outlined variant
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'black',
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },
                            height: '50px', // Adjust height for better alignment with the label
                        },
                        '& .MuiInputBase-input': {
                            height: '20px', // Height of input text
                            padding: '12px 14px', // Padding for input text (vertical and horizontal)
                            color: 'black',
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                            marginTop: "-2px", // Adjust margin top
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'black',
                        },
                    }}
                />
            </div>
        </Box>
    );
}

InputBox.propTypes = {
    input: PropTypes.string.isRequired,
};

export default InputBox;
