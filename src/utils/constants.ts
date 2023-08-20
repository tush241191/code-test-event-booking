import {MenuItem} from 'src/layouts/types'

export const menuItems: MenuItem[] = [
  {
    url: 'Kõik',
    label: 'Kõik',
    description: 'kõik sündmused'
  },
  {
    url: 'Täna',
    label: 'Täna',
    description: 'Tänased sündmused'
  },
  {
    url: 'Nädalavahetusel',
    label: 'Nädalavahetusel',
    description: 'Nädalavahetusel'
  },
  {
    url: 'uued',
    label: 'uued',
    description: 'Uued sündmused'
  },
  {
    url: 'Muusika',
    label: 'Muusika',
    description: 'Muusikasündmused'
  },
  {
    url: 'Teater',
    label: 'Teater',
    description: 'Teater'
  },
  {
    url: 'Kogupere',
    label: 'Kogupere',
    description: 'Pereüritused'
  },
  {
    url: 'Sport',
    label: 'Sport',
    description: 'Spordiüritused'
  },
  {
    url: 'Festival',
    label: 'Festival',
    description: 'Festivali üritused'
  },
  {
    url: 'Veel',
    label: 'Veel',
    items: [
      {
        url: 'Veel1',
        label: 'Veel1'
      },
      {
        url: 'Veel2',
        label: 'Veel2'
      },
      {
        url: 'Veel3',
        label: 'Veel3'
      }
    ]
  }
]

export const otherMenu: MenuItem = {
  url: 'PÖFF',
  label: 'PÖFF'
}
