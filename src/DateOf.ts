Date.of = (date: string, pattern: string): Date => {
  if (!date || !pattern)
    throw new Error('requires date and pattern!')

  const groups: (RegExpExecArray | null)[] = []
  pattern.replace(/([^yMdHhmsSa]*)(y+|M+|d+|H+|h+|m+|s+|S+|a)([^yMdHhmsSa]*)/g, (word: string) => {
    groups.push(/([^yMdHhmsSa]*)(y+|M+|d+|H+|h+|m+|s+|S+|a)([^yMdHhmsSa]*)/.exec(word))
    return ''
  })

  const result = new Date(0, 0, 1)
  let index: number = 0

  groups.forEach(function (group) {
    if (group) {
      const [prefix, unit, suffix] = group

      date
        .substring(index += prefix.length)
        .replace(
          Date.prototype._units[unit].parser,
          word => {
            Date.prototype._units[unit].set.call(
              result,
              Number(word)
            )

            index += word.length
            return ''
          })

      index += suffix.length
    }
  })

  return result
}
