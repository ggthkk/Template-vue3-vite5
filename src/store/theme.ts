import { defineStore } from "pinia";
import { darkTheme } from "naive-ui";

export const useStore = defineStore("theme", {
  state: () => {
    return {
      theme: localStorage.getItem("theme") === "darkTheme" ? darkTheme : null,
      active: localStorage.getItem("theme") === "darkTheme",
      renderPage: 0,
      windowWidth: 0,
    };
  },
  actions: {
    changeTheme(newTheme: boolean) {
      if (newTheme === true) {
        this.theme = darkTheme;
        localStorage.setItem("theme", "darkTheme");
        this.renderPage++;
      } else if (newTheme === false) {
        this.theme = null;
        localStorage.setItem("theme", "lightTheme");
        this.renderPage++;
      }
    },
  },
});
