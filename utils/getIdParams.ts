export default function getIdPrams(path: string) {
  const id = path.split('@')[1]
  return id
}
