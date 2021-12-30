export default `

    <section style="margin:0">
      <h2> Sample Documentation</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong>
        </a>
        process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer"
          >Storybook tutorials</a
        >
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span>
        Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>


    <table style="margin-top: 4rem">
      <colgroup>
        <col class="" />
        <col class="" />
        <col class="" />
        <col class="" />
      </colgroup>
      <thead class="v-data-table-header">
        <tr>
          <th
            role="columnheader"
            scope="col"
            aria-label="CSS Class Name: Not sorted. Activate to sort ascending."
            aria-sort="none"
            class="text-start sortable"
          >
            <span>CSS Class Name </span
            ><i
              aria-hidden="true"
              class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
              style="font-size: 18px"
            >
            </i>
          </th>
          <th
            role="columnheader"
            scope="col"
            aria-label="Background Color: Not sorted. Activate to sort ascending."
            aria-sort="none"
            class="text-start sortable"
            style="width: 175px; min-width: 175px"
          >
            <span>Background Color </span
            ><i
              aria-hidden="true"
              class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
              style="font-size: 18px"
            >
            </i>
          </th>
          <th
            role="columnheader"
            scope="col"
            aria-label="CSS: Not sorted. Activate to sort ascending."
            aria-sort="none"
            class="text-start sortable"
          >
            <span>CSS </span
            ><i
              aria-hidden="true"
              class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
              style="font-size: 18px"
            >
            </i>
          </th>
          <th
            role="columnheader"
            scope="col"
            aria-label="Description: Not sorted. Activate to sort ascending."
            aria-sort="none"
            class="text-start sortable"
          >
            <span>Description </span
            ><i
              aria-hidden="true"
              class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
              style="font-size: 18px"
            >
            </i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td class="text-start">.hb-primary-lighter</td>
          <td class="text-start">
            <div
              data-v-4357fa25=""
              class="hb-flex-all rectangle hb-primary-lighter"
            >
              <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
                >Lighter
              </span>
            </div>
          </td>
          <td style="background-color: #e0f5f5" class="text-start">
            background-color: #E0F5F5;
          </td>
          <td class="text-start">Selection Shading</td>
        </tr>
        <tr class="">
          <td class="text-start">.hb-primary-light</td>
          <td class="text-start">
            <div data-v-4357fa25="" class="hb-flex-all rectangle hb-primary-light">
              <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
                >Light
              </span>
            </div>
          </td>
          <td style="background-color: #8de3e3" class="text-start">
            background-color: #8DE3E3;
          </td>
          <td class="text-start"></td>
        </tr>
        <tr class="">
          <td class="text-start">.hb-primary</td>
          <td class="text-start">
            <div data-v-4357fa25="" class="hb-flex-all rectangle hb-primary">
              <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
                >Primary
              </span>
            </div>
          </td>
          <td style="background-color: #47c0bf; color: white" class="text-start">
            background-color: #47C0BF;
          </td>
          <td class="text-start">Primary Button Gradient</td>
        </tr>
        <tr class="">
          <td class="text-start">.hb-primary-dark</td>
          <td class="text-start">
            <div data-v-4357fa25="" class="hb-flex-all rectangle hb-primary-dark">
              <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
                >Dark
              </span>
            </div>
          </td>
          <td
            style="background-color: #00848e; color: white !important"
            class="text-start"
          >
            background-color: #00848E;
          </td>
          <td class="text-start">CTA Color</td>
        </tr>
        <tr class="">
          <td class="text-start">.hb-primary-darkest</td>
          <td class="text-start">
            <div
              data-v-4357fa25=""
              class="hb-flex-all rectangle hb-primary-darkest"
            >
              <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
                >Darkest
              </span>
            </div>
          </td>
          <td
            style="background-color: #003135; color: white !important"
            class="text-start"
          >
            background-color: #003135;
          </td>
          <td class="text-start">Header Color</td>
        </tr>
      </tbody>
    </table>`;
