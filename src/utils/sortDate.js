export default function sortDate(array = []) {
  const newArray = array.sort((a, b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return dateB - dateA
  })
  return newArray
}
