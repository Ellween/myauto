import { CarWithManModelName } from '../../interface/car.interface';
import motor from '../../assets/motor.svg';
import avtomatika from '../../assets/avtomatika.svg';
import speed from '../../assets/speed.svg';
import sache from '../../assets/sache.svg';
import GEL from '../../assets/GEL.svg';
import geoFlag from '../../assets/geoFlag.svg';
import chackbox from '../../assets/chackbox.svg';
import note from '../../assets/note.svg';
import shedareba from '../../assets/shedareba.svg';
import favorite from '../../assets/favorite.svg';

import {
  AlignDescriptionContainer,
  AlignHorizontal,
  Title,
  Year,
  IconDescription,
  Icon,
  Ganbajeba,
  IconDescriptionText,
  AlignVertical,
  Price,
  PriceIcon,
  FooterIcon,
  Views,
  Currency,
} from './CarCard.styled';

interface CarCardProps {
  car: CarWithManModelName;
}

const CarDescription: React.FC<CarCardProps> = ({ car }) => {
  const gearType: { [key: number]: string } = {
    1: 'მექანიკა',
    2: 'ტიპტრონიკა',
    3: 'ავტომატიკა',
    4: 'ვარიატორია',
  };

  return (
    <div className='container'>
      <AlignDescriptionContainer>
        <AlignHorizontal>
          <AlignHorizontal>
            <Title>
              {car.man_name} {car.model_name}
            </Title>
            <Year>{car.prod_year} წ</Year>
          </AlignHorizontal>
          <IconDescription>
            {!car.ganbajeba ? (
              <IconDescription>
                <Icon $checkbox={true} src={chackbox} alt='checkbox' />
                <Ganbajeba>განბაჟებული</Ganbajeba>
              </IconDescription>
            ) : (
              <IconDescription>
                <Ganbajeba $ganbajeba={true}>განბაჟება</Ganbajeba>
                <Price $ganbajeba={true}>69,507</Price>
                <Currency $ganbajeba={true}>₾</Currency>
              </IconDescription>
            )}
            <IconDescription>
              <Icon $flag={true} src={geoFlag} alt='geo_flag' />
              <IconDescriptionText $location={true}>
                თბილისი
              </IconDescriptionText>
            </IconDescription>
          </IconDescription>
        </AlignHorizontal>
        <AlignHorizontal>
          <AlignVertical>
            <IconDescription className='mb-[19px]'>
              <Icon src={motor} alt='motor' />
              <IconDescriptionText>1.8 დატ. ჰიბრიდი</IconDescriptionText>
            </IconDescription>
            <IconDescription>
              <Icon src={avtomatika} alt='automatic' />
              <IconDescriptionText>
                {gearType[car.gear_type_id]}
              </IconDescriptionText>
            </IconDescription>
          </AlignVertical>
          <AlignVertical>
            <IconDescription className='mb-[19px]'>
              <Icon src={speed} alt='speed' />
              <IconDescriptionText>{car.car_run_km} კმ</IconDescriptionText>
            </IconDescription>
            <IconDescription>
              <Icon src={sache} alt='sache' />
              <IconDescriptionText>
                {car.right_wheel ? 'მარჯვენა' : 'მარცხნივ'}
              </IconDescriptionText>
            </IconDescription>
          </AlignVertical>
          <IconDescription>
            <Price>{car.price}</Price>
            <PriceIcon className='items-center mt-[3px]'>
              {' '}
              <Icon src={GEL} alt='currency' className='m-0' />
            </PriceIcon>
          </IconDescription>
        </AlignHorizontal>
        <AlignHorizontal>
          <AlignHorizontal $itemsCenter={true}>
            {/* {car.status ? <div>status</div> : null} */}
            <Views>{car.views} ნახვა</Views>
            <div className='bg-[#8C929B] rounded-full h-1 w-1 mx-1'></div>
            <Views>2 დღის წინ</Views>
          </AlignHorizontal>
          <AlignHorizontal>
            <FooterIcon src={note} alt='currency' />
            <FooterIcon src={shedareba} alt='currency' />
            <FooterIcon src={favorite} alt='currency' />
          </AlignHorizontal>
        </AlignHorizontal>
      </AlignDescriptionContainer>
    </div>
  );
};

export default CarDescription;
