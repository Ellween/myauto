import { HeaderItems } from '../Sidebar.styled';

interface HeaderItemsProps {
  active: boolean;
  svg: string;
  onClick: () => void;
  middle?: boolean;
}

const HeaderImgComp: React.FC<HeaderItemsProps> = ({
  active,
  onClick,
  svg,
  middle,
}) => {
  return (
    <HeaderItems $active={active} $middle={middle} onClick={onClick}>
      <img src={svg} alt='' />
    </HeaderItems>
  );
};

export default HeaderImgComp;
