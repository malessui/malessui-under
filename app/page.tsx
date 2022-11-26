import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <div className="grid text-center place-items-center min-h-screen">
        <div>
          <svg
            width="364"
            height="206"
            viewBox="0 0 564 486"
            fill="none"
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1610_22-263430)">
              <path
                d="M40 183.35C40 98.7143 142.328 56.3285 202.175 116.175L346.825 260.825C406.671 320.671 364.286 423 279.65 423H135C82.533 423 40 380.467 40 328V183.35Z"
                fill="url(#paint0_linear_1610_22-400769)"
              />
              <path
                d="M509 183.35C509 98.7143 406.672 56.3285 346.825 116.175L202.175 260.825C142.329 320.671 184.714 423 269.35 423H414C466.467 423 509 380.467 509 328V183.35Z"
                fill="url(#paint1_linear_1610_22-972639)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1610_22-400769"
                x1="153.5"
                y1="57"
                x2="359"
                y2="403.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9E5CF1" />
                <stop offset="1" stop-color="#151BB5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1610_22-972639"
                x1="412"
                y1="63.5"
                x2="202"
                y2="443"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#AC115C" />
                <stop offset="1" stop-color="#EE55C3" />
              </linearGradient>
              <clipPath id="clip0_1610_22-263430">
                <rect width="564" height="486" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-xl font-black">Under Construction</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
