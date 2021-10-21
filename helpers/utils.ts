/**
 * Define here rules for Forms Validation
 * Each rule must be a fonction
 * See Vuetify doc for more info https://vuetifyjs.com/en/components/text-fields/
 */
export const FormValidationRules = {
  required: (value: boolean) => !!value || 'Required',
  passwordLength: (value: string, length: number) => value.length >= length || `Password must contain at least ${length} characters`,
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail'
  }
}
