//import * as T from "@/types";

const rootApp = (v: any) => {
  const isDev = import.meta.env.MODE;

  const devVariable = `
		 :root {
		 --logo: url('src/assets/images/demo-logo.png');
 
		 --main-bg-pc-url: url('src/assets/images/demo-bg-pc.png');
		 --main-bg-mb-url: url('src/assets/images/demo-bg-mb.png');

		 
		 --primary-theme-gradient: linear-gradient(135deg, #3770FC 0%, #182A56 100%); /* สีเทียบหลัก */
		 --secondary-theme-gradient: linear-gradient(135deg, #283445 0%, #172027 100%); /* สีเทียบรอง */
		 --webkit-primary-theme-gradient: -webkit-linear-gradient(100deg, #3770FC 0%, #182A56 100%);
		 --webkit-secondary-theme-gradient: -webkit-linear-gradient(100deg, #c86aff 0%, #628fff 100%);
 
		--primary-theme-color: #1B2537; /* สีธีมหลัก */
		--secondary-theme-color: #1A2850; /* สีธีมรอง */
		--theme-font-color: #ffffff; /* สีฟ้อนธีม */

		--primary-button-color-1: #3770FC; /* สีปุ่มหลัก 1 */
		--primary-button-color-2: #182A56; /* สีปุ่มหลัก 2 */
		--primary-button-font-color: #ffffff; /* สีฟ้อนปุ่มหลัก */

		--secondary-button-color-1: #283445; /* สีปุ่มรอง 1 */
		--secondary-button-color-2: #172027; /* สีปุ่มรอง 2 */
		--secondary-button-font-color: #FFFFFF; /* สีฟ้อนปุ่มรอง */

		--color-card: #0B1220; /* สีการ์ด */
		--color-card-border: #3F3F3F; /* สีเส้นการ์ด */

			/* fixed */
		--input-border-color: #3F3F3F; /* สีเส้นขอบอินพุท */
		--input-theme-color: #0b1220; /* สีพื้นหลังอินพุท */
		--input-font-color: #fff; /* สีฟ้อนอินพุท */

		--secondary-color: #8D929B; /* สีฟ้อนรอง */
		--tertiary-color: #3F3F3F; /* สี Stroke */
		--danger-color: #DF4F49; /* สีแดง */
		--info-color: #5BA3B5; /* สี Tag */
		--success-color: #13B601; /* สีเขียว */
		--warning-color: #EFA825; /* สีเหลือง */

		 }
		 `;
  const rootVariable = `
		 :root {
		 --logo: url('src/assets/images/demo-logo.png');
 
		 --main-bg-pc-url: url('src/assets/images/demo-bg-pc.png');
		 --main-bg-mb-url: url('src/assets/images/demo-bg-mb.png');

		 
		 --primary-theme-gradient: linear-gradient(135deg, #3770FC 0%, #182A56 100%); /* สีเทียบหลัก */
		 --secondary-theme-gradient: linear-gradient(135deg, #283445 0%, #172027 100%); /* สีเทียบรอง */
		 --webkit-primary-theme-gradient: -webkit-linear-gradient(100deg, #3770FC 0%, #182A56 100%);
		 --webkit-secondary-theme-gradient: -webkit-linear-gradient(100deg, #c86aff 0%, #628fff 100%);
 
			--primary-theme-color: #1B2537; /* สีธีมหลัก */
			--secondary-theme-color: #1A2850; /* สีธีมรอง */
			--theme-font-color: #ffffff; /* สีฟ้อนธีม */

			--primary-button-color-1: #3770FC; /* สีปุ่มหลัก 1 */
			--primary-button-color-2: #182A56; /* สีปุ่มหลัก 2 */
			--primary-button-font-color: #ffffff; /* สีฟ้อนปุ่มหลัก */

			--secondary-button-color-1: #283445; /* สีปุ่มรอง 1 */
			--secondary-button-color-2: #172027; /* สีปุ่มรอง 2 */
			--secondary-button-font-color: #FFFFFF; /* สีฟ้อนปุ่มรอง */

			--color-card: #0B1220; /* สีการ์ด */
			--color-card-border: #3F3F3F; /* สีเส้นการ์ด */

			/* fixed */
			--input-border-color: #3F3F3F; /* สีเส้นขอบอินพุท */
			--input-theme-color: #0b1220; /* สีพื้นหลังอินพุท */
			--input-font-color: #fff; /* สีฟ้อนอินพุท */

			--secondary-color: #8D929B; /* สีฟ้อนรอง */
			--tertiary-color: #3F3F3F; /* สี Stroke */
			--danger-color: #DF4F49; /* สีแดง */
			--info-color: #5BA3B5; /* สี Tag */
			--success-color: #13B601; /* สีเขียว */
			--warning-color: #EFA825; /* สีเหลือง */

		 }
		 `;

  const bodyRef = document.getElementsByTagName("body")[0];
  const styleTag = document.createElement("style");
  styleTag.innerHTML =
    isDev === "development" || !v ? devVariable : rootVariable;
  bodyRef.appendChild(styleTag);
};

export default rootApp;
