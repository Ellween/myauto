import tw from 'tailwind-styled-components';

interface Arrow {
  $isOpen?: boolean;
}

export const Form = tw.form`
  w-full
  h-full
`;

export const FormInputDetails = tw.div`  
  pt-[20px]
  px-[24px]
`;

export const PriceInputLabels = tw.div`
  flex
  justify-between
  items-center
  mb-[18px]
`;

export const Currency = tw.div`
  w-[50px]
  h-[24px]
  rounded-full
  flex
  justify-between
  items-center
  border-[1px]
  rounded-[12px]
  border-[#E2E5EB]
`;

export const CurrencyGel = tw.div`
  w-[26px] 
  h-[26px] 
  bg-black 
  text-white
  rounded-full 
  flex 
  justify-center 
  items-center 
`;

export const CurrencyUsd = tw.div`
  mr-[6px]
  text-[15px]
  text-[#8C929B]
`;

export const PriceLabel = tw.label`
  text-[13px]
  line-heigh-[16px]
  font-weight-[500]
`;

export const PriceInputs = tw.input`
  flex
  items-center
  border-[1px]
  border-[#D8DBE2]
  rounded-[8px]
  w-[94px]
  p-[8px]
  text-[13px]
  line-height-[15px]
  font-weight-[400]
`;

export const FormDetails = tw.div`
  mb-[20px]
`;

export const FormDetailsLabel = tw.label`
  text-[12px]
  line-height-[12px]
  font-weight-[5000]
`;

export const FormInput = tw.div`
  relative
  cursor-pointer
  flex  
  items-center
  border-[1px]
  border-gray-200
  rounded-[8px]
  mt-[8px]
  p-[8px]
`;

export const SpanText = tw.span`
  text-[#454857]
  text-[13px]
  font-weight-[500]
  line-height-[13px]
  overflow-hidden
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
  mr-[10px]
  ${(arrow) => (arrow.$isOpen ? 'rotate-0' : 'rotate-180')}
`;

export const Separator = tw.div`
  w-[250px]
  h-[1px]
  bg-[#E9E9F0]
`;

export const SubmitButtonContainer = tw.div`
  flex
  justify-center
  items-center
  bg-white
  shadow-md
  px-[23px]
  py-[20px]
  mt-[60px]
  border-t-[1px]
`;

export const SubmitButtonAppearance = tw.div`
  bg-[#FD4100]
  text-[14px]
  line-height-[14px]
  font-weight-[700]
  text-white
  w-[200px]
  py-[8px]
  flex
  justify-center
  align-center
  rounded-[6px]
`;

export const SubmitButton = tw.button`

`;

interface Active {
  $active: boolean;
}

export const Dropdown = tw.div<Active>`
  absolute
  top-full
  flex
  flex-col
  left-0
  w-full
  bg-white
  rounded-[8px]
  border-[1px]
  border-gray-200
  border-solid
  mt-[8px]
  shadow-md
  shadow-opacity-75
  z-10
  ${(arrow) => (arrow.$active ? 'visible' : 'invisible')}
`;

export const DropDownList = tw.div`
  overflow-y-auto
  max-h-[300px]
  py-[14px]
  px-[16px]
`;

export const DropdownItem = tw.input`
  text-[#6F7383]
  text-[14px]
  font-weight-[400]
  line-height-[17px]
  hover:text-[#272A37]
  mr-[10px]
  cursor-pointer
`;

export const InputAlign = tw.div`
  flex
  items-center
  justify-start
  mb-[10px]
`;

export const InputName = tw.span`
  text-[#6F7383]
  text-[14px]
  font-weight-[400]
  line-height-[17px]  
`;

export const SearchBtn = tw.button`
  bg-[#FD4100]
  p-2
  text-[12px]
  text-white
  rounded-[8px]
`;

export const SearchText = tw.p`
  cursor-pointer
  text-[13px]
  text-[#6F7383]
`;

export const SearchBtnText = tw.div`
  flex
  justify-between
  items-center
  border-t-[1px]
  p-4
`;
