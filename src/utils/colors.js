export const colors = [
  {
    id: 1,
    name: 'red',
    hex: '#F50D5A',
  },
  {
    id: 2,
    name: 'orange',
    hex: '#FF865C',
  },
  {
    id: 3,
    name: 'yellow',
    hex: '#FFEA5C',
  },
  {
    id: 4,
    name: 'green',
    hex: '#00DA76',
  },
  {
    id: 5,
    name: 'blue',
    hex: '#0096CE',
  },
  {
    id: 6,
    name: 'purple',
    hex: '#800FFF',
  },
]

export const getColorHex = color => {
  const selectedColor = colors.filter(colorHex => (color === colorHex.name))
  const hexColor = selectedColor[0].hex
  return hexColor
}
