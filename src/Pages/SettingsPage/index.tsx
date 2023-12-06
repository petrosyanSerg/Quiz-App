import CustomButton from "@/components/desktop/CustomButton";
import SimpleDropdown from "@/components/desktop/SimpleDropdown";
import SliderWithInput from "@/components/desktop/SliderWithInput";
import MultiSelectDropdown from "@/components/desktop/MultiSelectDropdown";

import styles from "@/Pages/SettingsPage/index.module.scss"
import {dropdownData} from "@/helpers/constants/settingsPage";

const SettingsPage = () => {
  return (
    <div className={styles.settings__page}>
      <div className={styles.settings__filter}>
        {/*<MultiSelectDropdown/>*/}
      </div>
      <div className={styles.settings__filter}>
        <SimpleDropdown
          options={dropdownData}
          placeholder="Difficulty"
        />
      </div>
      <div className={styles.settings__filter}>
        {/*<SliderWithInput/>*/}
      </div>
      <div className={styles.settings__filter}>
        {/*<CustomButton*/}
        {/*  type="default"*/}
        {/*/>*/}
      </div>
    </div>
  )
}
export default SettingsPage