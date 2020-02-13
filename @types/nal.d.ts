export {}

interface DateUnit {
  get: (this: Date) => string | number
  set: (this: Date, value: number) => void
  parser: RegExp
}

declare global {

  interface Date {
    _i18n: {
      month?: {
        name: string[12] | ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        abbreviation: string[12] | ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      day?: {
        name: string[7] | ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        abbreviation: string[7] | ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
      am?: string | 'AM',
      pm?: string | 'PM'
    }

    _units: {
      [key: string]: DateUnit
    }

    format: (pattern: string) => string
  }

  interface DateConstructor {
    of: (date: string, pattern: string) => Date
  }
}
