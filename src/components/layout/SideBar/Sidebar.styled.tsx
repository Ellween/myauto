import tw from 'tailwind-styled-components';

interface Active {
  $active: boolean;
  $middle?: boolean;
}

export const SideBarFilter = tw.div`
  bg-white
  w-[250px]
  h-auto
  justify-content: space-between;
  border-1
  rounded-md
`;

export const SidebarHeader = tw.div`
  flex
  justify-between
  items-center
  w-full
  h-[50px]
  border-b-1
`;

export const HeaderItems = tw.div<Active>`
cursor-pointer
  flex
  items-center
  justify-center
  w-full
  h-full
  border-b-[1px]
  ${(div) =>
    div.$middle &&
    'border-l-[1px] border-r-[1px] border-l-[#E9E9F0] border-r-[#E9E9F0]'}
  ${(div) => (div.$active ? 'border-b-[#FD4100]' : 'border-b-[#E9E9F0]')}
  
`;
