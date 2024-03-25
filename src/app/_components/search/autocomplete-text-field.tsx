import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { CircularProgress, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  inputValue: string
  onInputChange: (inputValue: string) => void
  onSelectOption: (option: Option) => void
  loading: boolean
  label: string
}

const AutocompleteTextField: React.FC<Props> = ({
  options,
  inputValue,
  onInputChange,
  onSelectOption,
  loading,
  label
}) => {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={option => option.label}
      loading={loading}
      loadingText="Loading..."
      noOptionsText="No cities found"
      onChange={(_event, value) => {
        onSelectOption(value as Option)
      }}
      filterOptions={item => item}
      PaperComponent={({ children }) => {
        if (!inputValue) return null
        return (
          <Paper elevation={0} sx={{ mt: 2 }}>
            {children}
          </Paper>
        )
      }}
      renderInput={params => (
        <TextField
          {...params}
          placeholder={label}
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent',
                backgroundColor: 'background.paper',
                zIndex: -1
              },
              '&:hover fieldset': {
                borderColor: 'secondary.light'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'secondary.main'
              }
            }
          }}
          InputProps={{
            ...params.InputProps,
            style: { paddingRight: 16, color: 'text.primary', paddingLeft: 16 },
            endAdornment: loading ? <CircularProgress color="inherit" size={20} /> : null,
            startAdornment: <SearchIcon />
          }}
        />
      )}
    />
  )
}

export default AutocompleteTextField
