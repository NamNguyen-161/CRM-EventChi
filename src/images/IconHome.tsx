import { ISvgOption } from "@/utils/types";

export default function IconHome(props: ISvgOption) {
  const { opacity } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={opacity || 0.6} clipPath="url(#clip0_11399_16659)">
        <path
          d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_11399_16659">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
