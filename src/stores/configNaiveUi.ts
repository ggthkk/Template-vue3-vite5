import { ref } from "vue";
import { defineStore } from "pinia";
import { GlobalThemeOverrides } from "naive-ui";

export const useConfigNaiveStore = defineStore("naiveUi", () => {
  const themeOverrides = ref<GlobalThemeOverrides>({
    Card: {
      borderRadius: "20px",
      paddingSmall: "0px 0px 0px",
    },
    Tooltip: {
      borderRadius: "10px",
    },
    Select: {
      peers: {
        InternalSelection: {
          borderRadius: "10px",
        },

        InternalSelectMenu: {
          borderRadius: "10px",
        },
      },
    },
    Dropdown: {
      borderRadius: "200px",
    },

    Message: {
      borderRadius: "10px",
    },
  });

  return {
    themeOverrides,
  };
});
