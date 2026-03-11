
import React, { useState } from 'react'
import { NextPage } from 'next'

//*MUI
import List from '@mui/material/List';
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

//*Component
import IconifyIcon from 'src/components/Icon';

//** Config 
import { VerticalItems } from 'src/configs/layout';

type TProps = {
  children: React.ReactNode
}
const RecursiveListItem = ({ items, level }: { items: any[]; level: number }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const handleClick = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title]
    }))
  }
  return (
    <>
      {items.map(item => {
        return (
          <React.Fragment key={item.title}>
            <ListItemButton
              sx={
                {
                  
                  paddingLeft: `${level * 20}px`
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
              <ListItemText primary={item.title} />
              {item.childrens && item.childrens.length > 0 && (
                openItems[item.title] ? <IconifyIcon icon="ic:outline-expand-less" /> : <IconifyIcon icon="ic:outline-expand-more" />
              )}
            </ListItemButton>
            {item.childrens && item.childrens.length > 0 && (
              <>
                <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
                  <RecursiveListItem items={item.childrens} level={level + 1} />
                </Collapse>
              </>
            )}
          </React.Fragment>

        )
      })}
    </>
  )
}
const ListVerticalLayout: NextPage<TProps> = ({ children }) => {


  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <RecursiveListItem items={VerticalItems} level={1} />
    </List>
  )
}

export default ListVerticalLayout
