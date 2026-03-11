
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'

//*MUI
import List from '@mui/material/List';
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

//*Component
import IconifyIcon from 'src/components/Icon';

//** Config 
import { VerticalItems } from 'src/configs/layout';

type TProps = {
  open: boolean;
}

type TListItem = {
  level: number;
  openItems: {
    [key: string]: boolean
  }
  items: any
  setOpenItems: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean
    }>
  >
  disabled: boolean
}

const RecursiveListItem: NextPage<TListItem> = ({ items, level, disabled }: { items: any[]; level: number; disabled: boolean }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const handleClick = (title: string) => {
    if (!disabled) {
      setOpenItems((prev) => ({
        ...prev,
        [title]: !prev[title]
      }))
    }
  }

  return (
    <>
      {items.map(item => {

        return (
          <React.Fragment key={item.title}>
            <ListItemButton
              sx={
                {
                  paddingLeft: `${level * (level === 1 ? 28 : 20)}px`
                }
              }
              onClick={() => {

                if (item.childrens) {
                  handleClick(item.title)
                }
              }}
            >
              <ListItemIcon>
                <IconifyIcon icon={item.icon} />
              </ListItemIcon>
              {!disabled && <ListItemText primary={item?.title} />}
              {item.childrens && item.childrens.length > 0 && (
                <>
                  {openItems[item.title] ? (
                    <IconifyIcon icon="ic:outline-expand-less" />

                  ) : (<IconifyIcon icon="ic:outline-expand-more" />)
                  }
                </>

              )}
            </ListItemButton>
            {item.childrens && item.childrens.length > 0 && (
              <>
                <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
                  <RecursiveListItem items={item.childrens} level={level + 1} openItems={{}} setOpenItems={function (): void {
                    throw new Error('Function not implemented.');
                  } } disabled={false} />
                </Collapse>
              </>
            )}
          </React.Fragment>

        )
      })}
    </>
  )
}
const ListVerticalLayout: NextPage<TProps> = ({ open }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    if (!open) {
      setOpenItems({})
    }
  }, [open])

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <RecursiveListItem
        disabled={!open}
        items={VerticalItems}
        level={1}
        openItems={openItems}
        setOpenItems={setOpenItems}
      />
    </List>
  )
}

export default ListVerticalLayout
