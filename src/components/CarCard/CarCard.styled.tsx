import tw from 'tailwind-styled-components';

interface IconDescriptionText {
  $location?: boolean;
}

interface Icon {
  $checkbox?: boolean;
  $flag?: boolean;
  $ganbajeba?: boolean;
}

interface Ganbajeba {
  $ganbajeba?: boolean;
}

interface Center {
  $itemsCenter?: boolean;
}

export const Inner__container = tw.div`
  flex 
  direction-row
  w-full 
  h-full 
  px-[12px]
  py-[13px]
  mb-[10px]
  rounded-md 
  bg-white
`;

export const Inner__container__img = tw.div`
  w-[234px]
  h-[144px]
  rounded-lg
  overflow-hidden
  mr-[16px]
`;

export const Inner__container__description = tw.div`
  flex
  w-full
`;

export const AlignHorizontal = tw.div<Center>`
  ${(div) => div.$itemsCenter && 'items-center'}
  flex
  justify-between
`;

export const AlignDescriptionContainer = tw.div`
  flex
  flex-col
  justify-between
  h-full
`;

export const AlignVertical = tw.div`
  flex
  flex-col
`;

export const Title = tw.h3`
  text-[14px]
  text-[#272A37]
  line-height-[16.9px
  font-weight-[500]
`;

export const Year = tw.h3`
  text-[14px]
  font-weight-[500]
  line-height-[16.9px]
  px-[8px]
  text-[#8C929B]
`;

export const Icon = tw.img<Icon>`
  ${(p) =>
    (p.$flag && 'mr-[8px] ml-[16px]') ||
    (p.$checkbox && 'mr-[6.5px]') ||
    (p.$ganbajeba && 'text[#FF3B30]') ||
    'mr-[12px]'}
  w-[16px]
  h-[16px]

`;

export const IconDescription = tw.div`
  flex
`;

export const IconDescriptionText = tw.p<IconDescriptionText>`
  ${(p) => p.$location && 'text-[#6F7383]'}
  font-weight-[500]
  text-[12px]
  line-height-[12px]
`;

export const Price = tw.p<Ganbajeba>`
  ${(p) =>
    p.$ganbajeba
      ? 'text-[#FF3B30] text-[11px] line-height-[13px] ml-[4px] mr-[2px]'
      : 'text-[20px] line-height-[20px]'} 
  font-weight-[500]
`;

export const PriceIcon = tw.div`
  bg-[#F2F3F6]
  rounded-[12px]
  w-[26px]
  h-[24px]
  flex
  justify-center
  items-center
  ml-[4px]
`;

export const Ganbajeba = tw.div<Ganbajeba>`
  ${(p) => (p.$ganbajeba ? 'text-[#FF3B30]' : 'text-[#26B753]')} 
  text-[11px]
  line-height-[13px]
  font-weight-[500]
`;

export const Currency = tw.p<Ganbajeba>`
  text-[#FF3B30]
  text-[11px]
  font-weight-[500]
  line-height-[13px]
`;

export const Views = tw.div`
  text-[#6F7383]
  font-weight-[400]
  text-[12px]
  line-height-[14px]
  :after-content-[content: '•']
`;

export const FooterIcon = tw.img`
  w-[12px]
  h-[12px]
  ml-[18px]
`;
