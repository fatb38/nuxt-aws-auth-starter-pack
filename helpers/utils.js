/**
 * Define here rules for Forms Validation
 * Each rule must be a fonction
 * See Vuetify doc for more info https://vuetifyjs.com/en/components/text-fields/
 */
export const FormValidationRules = {
  required: value => !!value || 'Required',
  passwordLength: value => value.length >= 8 || 'Password must contain at least 8 characters',
  email: (value) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail'
  }
}
