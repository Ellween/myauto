import tw from 'tailwind-styled-components';

interface Arrow {
  $isOpen?: boolean;
}

export const SortContainer = tw.div`
  flex
  justify-between
  items-center
  mb-[24px]
`;

export const Orders = tw.div`

`;

export const SortButtons = tw.div`
  flex
  gap-[8px]
`;

export const SortButton = tw.button`
  relative
  border-1
  border-gray-200
  border-solid
  rounded-[8px]
  bg-white
  pr-[8px]
  pl-[12px]
  py-[8px]
`;

export const SpanText = tw.span`
  text-[#454857]
  text-[12px]
  font-weight-[500]
  line-height-[12px]
  mr-[13px]
`;

export const SpanIcon = tw.span<Arrow>`
  absolute
  top-[50%]
  right-0
  h-[18px] 
  w-[15px]
  translate-y-[-50%]
  transition
  duration-150
  ${(arrow) => (arrow.$isOpen ? 'rotate-0' : 'rotate-180')}
`;

export const SortButtonContainer = tw.div`
  relative
`;

export const SortButtonDropdown = tw.div<Arrow>`
  absolute
  top-50%
  flex
  flex-col
  left-0
  w-[182px]
  h-auto
  bg-white
  py-[14px]
  px-[16px]
  rounded-[8px]
  border-1
  border-gray-200
  border-solid
  mt-[8px]
  shadow-md
  shadow-opacity-75
  z-10
  ${(arrow) => (arrow.$isOpen ? 'visible' : 'invisible')}
`;

export const SortButtonDropdownItem = tw.span`
  text-[#6F7383]
  text-[14px]
  font-weight-[400]
  line-height-[17px]
  mb-[14px]
  hover:text-[#272A37]
  cursor-pointer
`;
