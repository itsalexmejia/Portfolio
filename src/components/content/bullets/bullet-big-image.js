// import { ChartPieIcon, GlobeIcon, UsersIcon } from '@heroicons/react/outline'
import * as React from 'react'


// markup
const BulletBig = props => {
  return (
    <div className="relative bg-white">
    <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
        <h2 className="font-arena text-base font-semibold text-arena-600 tracking-wide uppercase">¿Por qué trabajar con nosotros?</h2>
        <h3 className="font-arena text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">¿Por qué somos diferentes?</h3>

            <dl className="mt-10 space-y-10">

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                      {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 512 490.6" className="h-8 w-8 fillwhite">
<defs>
</defs>
<g>
	<g>
		<g>
			<path d="M210.8,348.9H170c-5.5,0-10-4.5-10-10s4.5-10,10-10h40.8c5.5,0,10,4.5,10,10S216.3,348.9,210.8,348.9L210.8,348.9z"/>
		</g>
		<g>
			<path d="M342,348.9h-40.8c-5.5,0-10-4.5-10-10s4.5-10,10-10H342c5.5,0,10,4.5,10,10S347.5,348.9,342,348.9z"/>
		</g>
		<g>
			<path d="M255.8,348.9c-4.2,0-8-2.7-9.4-6.6c-1.4-3.9-0.2-8.3,2.9-11c3.3-2.8,8.1-3.1,11.7-0.9c3.5,2.2,5.3,6.4,4.5,10.4
				C264.7,345.5,260.5,348.9,255.8,348.9z"/>
		</g>
		<g>
			<g>
				<path d="M314,388.3H198c-5.5,0-10-4.5-10-10s4.5-10,10-10H314c5.5,0,10,4.5,10,10S319.6,388.3,314,388.3z"/>
			</g>
		</g>
		<path d="M298.5,225.7c13.4-11.8,21.9-29.1,21.9-48.4c0-35.5-28.9-64.5-64.5-64.5s-64.4,28.9-64.4,64.5c0,19.3,8.5,36.6,21.9,48.4
			c-22.7,8.7-38.9,30.7-38.9,56.4v17.1c0,5.5,4.5,10,10,10h142.8c5.5,0,10-4.5,10-10v-17.1C337.4,256.4,321.2,234.4,298.5,225.7
			L298.5,225.7z M256,132.9c24.5,0,44.5,19.9,44.5,44.5s-19.9,44.5-44.5,44.5s-44.5-19.9-44.5-44.5S231.5,132.9,256,132.9z
			 M317.4,289.3H194.6v-7.1c0-22.2,18.1-40.3,40.3-40.3h42.1c22.2,0,40.3,18.1,40.3,40.3L317.4,289.3L317.4,289.3z"/>
		<path d="M120.7,490.6c-7.7,0-15.3-2.4-21.8-7.1c-10.6-7.7-16.3-20.2-15.2-33.3l11.3-130.6l-85.9-99c-8.6-9.9-11.3-23.3-7.3-35.9
			c4.1-12.5,14.1-21.8,27-24.7l127.7-29.6L224.2,18C230.9,6.7,242.8,0,256,0c13.2,0,25.1,6.7,31.8,18l67.6,112.4l127.7,29.6
			c12.8,3,22.9,12.2,27,24.7c4.1,12.5,1.3,25.9-7.3,35.9l-85.9,99l11.3,130.6c1.1,13.1-4.5,25.6-15.2,33.3
			c-10.6,7.7-24.2,9.3-36.3,4.2L256,436.5l-120.7,51.2C130.6,489.6,125.6,490.6,120.7,490.6L120.7,490.6z M256,20
			c-6.1,0-11.6,3.1-14.7,8.3l-69.8,116c-1.4,2.3-3.7,4-6.3,4.6L33.3,179.4c-5.9,1.4-10.6,5.6-12.5,11.4s-0.6,12,3.4,16.6L113,309.7
			c1.8,2,2.6,4.7,2.4,7.4l-11.7,134.9c-0.5,6.1,2.1,11.8,7,15.4c4.9,3.6,11.2,4.3,16.8,1.9l124.6-52.8c2.5-1.1,5.3-1.1,7.8,0
			l124.6,52.8c5.6,2.4,11.9,1.7,16.8-1.9c4.9-3.6,7.5-9.3,7-15.4l-11.7-134.9c-0.2-2.7,0.6-5.4,2.4-7.4l88.7-102.2
			c4-4.6,5.2-10.8,3.4-16.6c-1.9-5.8-6.5-10.1-12.5-11.4l-131.9-30.5c-2.6-0.6-4.9-2.3-6.3-4.6l-69.8-116
			C267.6,23.1,262.1,20,256,20L256,20z"/>
	</g>
</g>
</svg>

                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Talento y cultura</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Buscamos que la transformación ocurra desde el interior de las organizaciones y con su propia gente. Generamos y gestionamos cambios profundos de cultura para lograr objetivos trascendentales.</dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                      {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 480 480" className="h-8 w-8 fillwhite">
<defs>
</defs>
<g id="Outlines_1_">
	<g>
		<circle cx="248" cy="304" r="8"/>
		<circle cx="280" cy="304" r="8"/>
		<circle cx="312" cy="304" r="8"/>
		<circle cx="248" cy="240" r="8"/>
		<circle cx="280" cy="240" r="8"/>
		<circle cx="312" cy="240" r="8"/>
		<path d="M160,248h48c4.4,0,8-3.6,8-8s-3.6-8-8-8h-48c-4.4,0-8,3.6-8,8S155.6,248,160,248z"/>
		<circle cx="248" cy="176" r="8"/>
		<circle cx="280" cy="176" r="8"/>
		<circle cx="312" cy="176" r="8"/>
		<path d="M208,168h-48c-4.4,0-8,3.6-8,8s3.6,8,8,8h48c4.4,0,8-3.6,8-8S212.4,168,208,168z"/>
		<path d="M463.9,408.1c0.4-25.6-9.9-58.3-29.3-94.9c26.7-70.8,12.8-150.6-36.4-208.2c-2.9-3.4-7.9-3.8-11.3-0.9s-3.8,7.9-0.9,11.3
			c42.2,49.4,56.5,116.7,38,179c-10.6-17.7-22.1-34.8-34.5-51.3c-2.6-3.5-7.7-4.3-11.2-1.6c-3.5,2.6-4.3,7.7-1.6,11.2c0,0,0,0,0,0
			c14.8,19.6,28.2,40.2,40.2,61.6c-19.6,46.2-56.4,83-102.6,102.6c-36.4-20.8-70.6-45.2-102-73H352c4.4,0,8-3.6,8-8v-9.5
			c12.4-4.3,19-17.9,14.7-30.4c-2.4-6.9-7.8-12.3-14.7-14.7V144c0-4.4-3.6-8-8-8h-60.3c-32.7-30.2-68.3-57-106.3-80
			c39.6-11.8,82-10.5,120.8,3.8c-1.4,3.9-2.1,8.1-2.1,12.2c-0.2,22.3,17.7,40.6,40,40.9s40.6-17.7,40.9-40s-17.7-40.6-40-40.9
			c-11.8-0.1-23,4.9-30.8,13.7c-47.5-18.2-100-18.3-147.6-0.2c-36.2-19.1-69-29.5-94.6-29.3C58.8-1.5,33.9-5.3,16.2,7.8
			S-5.3,45.9,7.8,63.6c2.4,3.2,5.2,6,8.4,8.4c-0.4,25.8,10,58.6,29.2,94.7C16,244.4,35.9,332.2,95.8,389.8c3.2,3.1,8.3,3,11.3-0.2
			c3.1-3.2,3-8.3-0.2-11.3C55.2,328.5,35.5,254.2,56,185.4c18.8,31.2,40.2,60.7,64,88.2V336c0,4.4,3.6,8,8,8h32c4.4,0,8-3.6,8-8
			s-3.6-8-8-8h-24v-36.4c8.2,9,16.7,18,25.5,26.8c39.8,40.5,84.5,76,132.9,105.6c-33.8,10.1-69.7,10.5-103.7,1.4
			c5.4-21.6-7.7-43.5-29.3-49s-43.5,7.7-49,29.3c-5.4,21.6,7.7,43.5,29.3,49c15.6,3.9,32.1-1.8,41.9-14.7
			c42.7,12.1,88.1,10.2,129.6-5.5c35.6,18.8,68,29.4,93.6,29.4c0.4,0,0.8,0,1.3,0c13.2,17.7,38.1,21.3,55.8,8.1
			c17.7-13.2,21.3-38.1,8.1-55.8C469.8,413.2,467,410.4,463.9,408.1L463.9,408.1z M344,48c13.3,0,24,10.7,24,24s-10.7,24-24,24
			s-24-10.7-24-24S330.7,48,344,48z M194.6,328c-5.6-5.2-11.2-10.5-16.8-16H208c4.4,0,8-3.6,8-8s-3.6-8-8-8h-46
			c-5.1-5.3-10.1-10.6-15-16h197v1.5c-12.4,4.3-19,17.9-14.7,30.4c2.4,6.9,7.8,12.3,14.7,14.7v1.5H194.6z M344,264H136v-48h208V264z
			 M352,312c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S356.4,312,352,312z M40,16c8.4,0,16.2,4.4,20.5,11.7c0,0.1,0.1,0.2,0.2,0.3
			c2.2,3.6,3.3,7.8,3.4,12c0,13.3-10.7,24-24,24c-4.3,0-8.4-1.2-12.1-3.4l-0.2-0.1C16.3,53.7,12.6,39,19.4,27.7
			C23.7,20.4,31.5,16,40,16z M32.2,79.2c21.6,4.4,42.6-9.6,47-31.2c1-5.2,1-10.5,0-15.7c23.9,2.9,47.1,10.2,68.3,21.4
			C106.9,74,73.9,107,53.7,147.7C42.3,126.4,35.1,103.1,32.2,79.2z M165.5,63.1c36.5,20.7,70.7,45.2,102.2,72.9H248
			c-4.4,0-8,3.6-8,8s3.6,8,8,8h96v48H136v-48h80c4.4,0,8-3.6,8-8s-3.6-8-8-8h-88c-4.4,0-8,3.6-8,8v104.5c-21.3-26-40.4-53.7-57-83
			C82.6,119.4,119.3,82.6,165.5,63.1z M152,440c-13.3,0-24-10.7-24-24s10.7-24,24-24s24,10.7,24,24S165.2,440,152,440z M332.2,426.4
			c40.8-20.3,73.8-53.3,94.1-94.1c11.3,21.3,18.5,44.5,21.4,68.5c-21.6-4.3-42.6,9.7-46.9,31.3c-1,5.2-1,10.5,0,15.7
			C376.8,445,353.5,437.7,332.2,426.4z M440,464c-8.4,0-16.1-4.4-20.5-11.6l-0.2-0.3c-2.2-3.6-3.3-7.8-3.4-12.1
			c0-13.3,10.7-24,24-24c4.3,0,8.4,1.2,12.1,3.4l0.2,0.1c11.4,6.8,15.1,21.4,8.3,32.8C456.3,459.6,448.4,464,440,464z"/>
		<path d="M448,88c13.3,0,24-10.7,24-24s-10.7-24-24-24s-24,10.7-24,24S434.7,88,448,88z M448,56c4.4,0,8,3.6,8,8s-3.6,8-8,8
			s-8-3.6-8-8S443.6,56,448,56z"/>
		<path d="M40,376c-13.3,0-24,10.7-24,24s10.7,24,24,24s24-10.7,24-24S53.2,376,40,376z M40,408c-4.4,0-8-3.6-8-8s3.6-8,8-8
			s8,3.6,8,8S44.4,408,40,408z"/>
	</g>
</g>
</svg>

                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ciencia de datos</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Utilizamos la información de nuestros clientes y complementamos con información externa para generar análisis que mejoren la toma de decisiones. Desarrollamos herramientas ad-hoc que facilitan la experiencia del usuario.</dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-2xl bg-arena-500 text-white">
                      {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 447.6" className="h-8 w-8 fillwhite">
<defs>
</defs>
<g>
	<g>
		<path d="M458.8,361.5c-16.6,0-30.1,13.5-30.1,30.1c0,16.6,13.5,30.1,30.1,30.1s30.1-13.5,30.1-30.1
			C488.9,375,475.4,361.5,458.8,361.5z M458.8,406.7c-8.3,0-15.1-6.8-15.1-15.1c0-8.3,6.8-15.1,15.1-15.1c8.3,0,15.1,6.8,15.1,15.1
			C473.9,399.9,467.1,406.7,458.8,406.7z"/>
		<path d="M466.3,338.9v-97l23.2-32.2c1.6-2.3,1.9-5.3,0.6-7.8c-1.3-2.5-3.9-4.1-6.7-4.1h-17.1V107c25.8-3.7,45.7-25.9,45.7-52.7
			c0-29.3-23.9-53.2-53.2-53.2c-25.6,0-47,18.2-52.1,42.3h-24.8V12.1c0-6.7-5.4-12.1-12.1-12.1H140.4c-6.7,0-12.1,5.4-12.1,12.1
			v31.4h-52c-16.9,0-30.6,13.7-30.6,30.6v103.8C19.9,181.5,0,203.7,0,230.5c0,26.8,19.9,49,45.7,52.7v27.5l-23.2,32.2
			c-1.6,2.3-1.9,5.3-0.6,7.8c1.3,2.5,3.9,4.1,6.7,4.1h17.1v18.7c0,16.9,13.7,30.6,30.6,30.6h52v31.4c0,6.7,5.4,12.1,12.1,12.1H172
			c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-28.7v-78.7h223.6v78.7H207c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h162.8
			c6.7,0,12.1-5.4,12.1-12.1v-31.4h25.2c5.6,23.3,26.7,40.7,51.7,40.7c29.3,0,53.2-23.9,53.2-53.2
			C512,364.8,492.1,342.6,466.3,338.9L466.3,338.9z M468.7,212.8l-10,13.9l-10-13.9H468.7z M458.8,16.2c21.1,0,38.2,17.1,38.2,38.2
			c0,21.1-17.1,38.2-38.2,38.2s-38.2-17.1-38.2-38.2C420.6,33.3,437.7,16.2,458.8,16.2z M43.2,339.8l10-13.9l10,13.9H43.2z
			 M247.6,338.9H140.4c-6.7,0-12.1,5.4-12.1,12.1v38h-52c-8.6,0-15.6-7-15.6-15.6v-18.7h17.1c2.8,0,5.4-1.6,6.7-4.1s1.1-5.5-0.6-7.8
			l-23.2-32.2v-27.4c17.4-2.4,32.5-13.2,40.3-29.3c1.8-3.7,0.3-8.2-3.4-10c-3.7-1.8-8.2-0.3-10,3.4c-6.5,13.2-19.6,21.4-34.3,21.4
			c-21.1,0-38.2-17.1-38.2-38.2s17.1-38.2,38.2-38.2c16.3,0,30.8,10.3,36.1,25.7c1.4,3.9,5.6,6,9.5,4.6c3.9-1.4,6-5.6,4.6-9.5
			c-6.6-19-23.3-32.5-42.8-35.3V74.1c0-8.6,7-15.6,15.6-15.6h52v38c0,6.7,5.4,12.1,12.1,12.1h107.2v46.6H140.4
			c-6.7,0-12.1,5.4-12.1,12.1V283c0,6.7,5.4,12.1,12.1,12.1h107.2V338.9z M366.9,170.2v109.9H143.3V170.2H366.9z M405.6,389.1h-23.8
			v-38c0-6.7-5.4-12.1-12.1-12.1H262.6v-43.8h107.2c6.7,0,12.1-5.4,12.1-12.1V167.4c0-6.7-5.4-12.1-12.1-12.1H262.6v-46.6H309
			c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H143.3V15h223.6v78.7H344c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h25.8
			c6.7,0,12.1-5.4,12.1-12.1V58.5h23.9c1.9,24.9,21.1,45.1,45.5,48.6v90.8h-17.1c-2.8,0-5.4,1.6-6.7,4.1c-1.3,2.5-1.1,5.5,0.6,7.8
			l23.2,32.2v97C426.3,342.5,406.8,363.4,405.6,389.1z M458.8,429.8c-21.1,0-38.2-17.1-38.2-38.2c0-21.1,17.1-38.2,38.2-38.2
			s38.2,17.1,38.2,38.2S479.9,429.8,458.8,429.8z"/>
		<path d="M458.8,84.5c16.6,0,30.1-13.5,30.1-30.1c0-16.6-13.5-30.1-30.1-30.1s-30.1,13.5-30.1,30.1S442.2,84.5,458.8,84.5z
			 M458.8,39.3c8.3,0,15.1,6.8,15.1,15.1s-6.8,15.1-15.1,15.1c-8.3,0-15.1-6.8-15.1-15.1S450.5,39.3,458.8,39.3z"/>
		<path d="M53.2,200.4c-16.6,0-30.1,13.5-30.1,30.1c0,16.6,13.5,30.1,30.1,30.1s30.1-13.5,30.1-30.1S69.8,200.4,53.2,200.4z
			 M53.2,245.6c-8.3,0-15.1-6.8-15.1-15.1s6.8-15.1,15.1-15.1s15.1,6.8,15.1,15.1C68.3,238.8,61.5,245.6,53.2,245.6z"/>
		<path d="M171.2,204.5H339c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H171.2c-4.1,0-7.5,3.4-7.5,7.5S167.1,204.5,171.2,204.5z"/>
		<path d="M171.2,232.7H339c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5H171.2c-4.1,0-7.5,3.4-7.5,7.5S167.1,232.7,171.2,232.7z"/>
		<path d="M302.9,245.8h-95.7c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h95.7c4.1,0,7.5-3.4,7.5-7.5S307.1,245.8,302.9,245.8z"/>
		<path d="M346.5,39.4c0-4.1-3.4-7.5-7.5-7.5H171.2c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5H339C343.1,46.9,346.5,43.6,346.5,39.4z"
			/>
		<path d="M300.5,60.1h-90.9c-4.1,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5h90.9c4.1,0,7.5-3.4,7.5-7.5S304.7,60.1,300.5,60.1z"/>
		<path d="M218.8,411.8v-36.2c0-5.8-4.7-10.5-10.5-10.5h-36.2c-5.8,0-10.5,4.7-10.5,10.5v36.2c0,5.8,4.7,10.5,10.5,10.5h36.2
			C214.1,422.3,218.8,417.6,218.8,411.8z M203.8,407.3h-27.2v-27.2h27.2V407.3z"/>
		<path d="M241.2,387.3H341c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-99.8c-4.1,0-7.5,3.4-7.5,7.5S237,387.3,241.2,387.3
			L241.2,387.3z"/>
		<path d="M241.2,413H341c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5h-99.8c-4.1,0-7.5,3.4-7.5,7.5S237,413,241.2,413L241.2,413z"/>
	</g>
</g>
</svg>

                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Estrategia y procesos</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">Alineamos procesos existentes y nuevos con las estrategias que diseñamos, siempre tomando en cuenta el carácter único de cada cliente para garantizar el éxito y sostenibilidad en el negocio a largo plazo.</dd>
                </div>


            </dl>

        </div>
      </div>
    </div>
  </div>
  )
}

export default BulletBig




