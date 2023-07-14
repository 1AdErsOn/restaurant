import { computed } from 'vue'

const alertPropColor = {
  variant: {
    required: false,
    default: 'success',
    validator(value) {
      const options = ['danger', 'warning', 'info', 'success']
      return options.includes(value)
    }
  }
}
function useAlertColor(props) {
  return computed(() => {
    const options = {
      danger: 'alert-danger',
      warning: 'alert-warning',
      info: 'alert-info',
      success: 'alert-success'
    }
    return options[props.variant]
  })
}

export { alertPropColor, useAlertColor }
