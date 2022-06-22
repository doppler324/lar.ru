import { ref } from '@vue/composition-Api'
import { isNavLinkActive } from '@core/layouts/utils'

export default function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  const isActive = ref(false)

  const updateIsActive = () => {
    isActive.value = isNavLinkActive(item)
  }

  return {
    isActive,
    updateIsActive,
  }
}
