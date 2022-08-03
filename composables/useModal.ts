export function useModal () {
  return {
    // in vue 3 ref() would be enough
    open: useState('open', () => false)
  }
}
