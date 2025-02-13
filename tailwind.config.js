/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: 'var(--primary-theme-color)', // สีหลักของธีม
                secondary: 'var(--secondary-theme-color)', // สีรองของธีม


                // สีปุ่มหลัก
                'primary-btn-1': 'var(--primary-button-color-1)', // สีหลักของปุ่มหลัก
                'primary-btn-2': 'var(--primary-button-color-2)', // สีรองของปุ่มหลัก
                'primary-btn-font': 'var(--primary-button-font-color)', // สีฟอนต์ของปุ่มหลัก

                // สีปุ่มรอง
                'secondary-btn-1': 'var(--secondary-button-color-1)', // สีหลักของปุ่มรอง
                'secondary-btn-2': 'var(--secondary-button-color-2)', // สีรองของปุ่มรอง
                'secondary-btn-font': 'var(--secondary-button-font-color)', // สีฟอนต์ของปุ่มรอง

                // สีของการ์ด
                'card-bg': 'var(--color-card)', // สีพื้นหลังของการ์ด
                'card-border': 'var(--color-card-border)', // สีเส้นขอบของการ์ด

                // สีของ Input
                'input-border': 'var(--input-border-color)', // สีเส้นขอบของอินพุต
                'input-bg': 'var(--input-theme-color)', // สีพื้นหลังของอินพุต
                'input-font': 'var(--input-font-color)', // สีฟอนต์ของอินพุต

                // สีเพิ่มเติม
                'font-main': 'var(--theme-font-color)', // สีฟอนต์หลัก
                'font-secondary': 'var(--secondary-color)', // สีฟอนต์รอง
                'stroke': 'var(--tertiary-color)', // สีของเส้นขอบหรือเส้นแบ่ง
                'danger': 'var(--danger-color)', // สีแดง (แจ้งเตือน, ข้อผิดพลาด)
                'info': 'var(--info-color)', // สีฟ้า (ข้อมูล, แท็ก)
                'success': 'var(--success-color)', // สีเขียว (สำเร็จ)
                'warning': 'var(--warning-color)', // สีเหลือง (คำเตือน)
                'main-table-pk': 'var(--table-pk-color)', // สีโต๊ะหลัก

            },

            backgroundImage: {
                'primary-gradient': 'var(--primary-theme-gradient)', // ไล่เฉดสีหลักของธีม
                'secondary-gradient': 'var(--secondary-theme-gradient)', // ไล่เฉดสีรองของธีม
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark"],
        darkTheme: "light", // name of one of the included themes for dark mode
        base: false, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },

}