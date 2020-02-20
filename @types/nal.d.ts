export {}

declare global {

  interface Date {
    i18n: {
      month: {
        names: [string, string, string, string, string, string, string, string,
          string, string, string, string]
        abbreviations: [string, string, string, string, string, string, string,
          string, string, string, string, string]
      },
      day: {
        names: [string, string, string, string, string, string, string]
        abbreviations: [string, string, string, string, string, string, string]
      },
      am: string,
      pm: string
    }

    units: {
      [key: string]: DateUnit
    }

    format: (pattern: string) => string
  }

  interface DateUnit {
    parse: (date: Date, text: string, unit?: string) => void
    format: (date: Date, pattern: string) => string
  }

  // noinspection JSUnusedGlobalSymbols
  interface DateConstructor {
    of: (date: string, pattern: string) => Date
  }
}
