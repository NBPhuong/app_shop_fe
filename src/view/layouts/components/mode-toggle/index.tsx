//** React */
import React from 'react'

// ** Mui Imports
import IconButton from '@mui/material/IconButton'

//** Component
import Icon from '../../../../components/Icon'

//** Hooks
import { useSettings } from 'src/hooks/useSettings'

//** Types
import { Mode } from 'src/types/layouts'

const ModeToggle = () => {
  const { settings, saveSettings } = useSettings()

  const handleModeChange = (mode: Mode) => {
    saveSettings({ ...settings, mode })
  }

  const handleToggleMode = () => {
    if (settings.mode === 'dark') {
      handleModeChange('light')
    } else {
      handleModeChange('dark')
    }
  }

  return (
    <IconButton color='inherit' onClick={handleToggleMode}>
      <Icon
        icon={
          settings.mode === 'light'
            ? 'carbon:light-mode'
            : 'carbon:dark-mode'
        }
      />
    </IconButton>
  )
}

export default ModeToggle