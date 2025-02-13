import { useI18n } from "vue-i18n";
import { eventBus } from "./eventBus";

class helper {
  openModal(id: string) {
    const nameEvent: any = `${id}-opened`;
    eventBus.emit(nameEvent);
  }

  closeModal(id: string) {
    const nameEvent: any = `${id}-closed`;
    eventBus.emit(nameEvent);
  }

  onModalEvent(
    id: string,
    eventType: "opened" | "closed",
    callback: Function | any
  ) {
    const nameEvent: any = `${id}-${eventType}`;
    eventBus.on(nameEvent, callback);
  }

  offModalEvent(
    id: string,
    eventType: "opened" | "closed",
    callback: Function | any
  ) {
    const nameEvent: any = `${id}-${eventType}`;
    eventBus.off(nameEvent, callback);
  }

  openModal_unsue(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
      const nameEvent: any = `${id}-opened`;
      eventBus.emit(nameEvent);
    }
  }

  closeModal_unuse(id: string) {
    const modal = document.getElementById(id) as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }

  image = (path: string): string => {
    return new URL(`../assets/images/seta/${path}`, import.meta.url).href;
  };

  useI18nHelper() {
    const { t } = useI18n();
    return { t };
  }

  text(v: string, option?: object): string {
    const { t } = useI18n();
    return t(v, (option as any) || "");
  }

  currency(v: string | number) {
    const { n } = useI18n();
    if (typeof v === "string") return n(parseFloat(v), "decimal");
    return n(v, "decimal");
  }

  // validate
  onlyAllowNumber(value: string) {
    return !value || /^\d*\.?\d*$/.test(value);
  }
  onlyAllowText(value: string) {
    return !value || /^[^0-9]+$/.test(value);
  }

  parse = (input: string): number | null => {
    const nums = input.replace(/,/g, "").trim();
    if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums);
    return nums === "" ? null : Number.NaN;
  };

  format = (value: number | null): string => {
    if (value === null) return "";
    return value.toLocaleString("en-US");
  };

  formatPhoneNumber = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  bankNumber = (value: string | number): string => {
    let str = typeof value === "number" ? value.toString() : value;
    if (str.length === 10) {
      return `${str.substring(0, 3)} - ${str[3]} - ${str.substring(4, 9)} - ${
        str[9]
      }`;
    } else if (str.length === 12) {
      return `${str.substring(0, 3)} - ${str.substring(3, 4)} - ${str.substring(
        4,
        9
      )} - ${str.substring(9, 12)}`;
    } else {
      return str;
    }
  };

  hexToRgba(hex: string, alpha: any) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    let a = parseInt(hex.substring(6, 8), 16) / 255;
    a = alpha !== undefined ? alpha : a;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

export default new helper();
