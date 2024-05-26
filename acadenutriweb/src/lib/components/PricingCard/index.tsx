import Link from 'next/link';
import { useMemo } from 'react';
import { IoCheckmark } from 'react-icons/io5';

import {
  PricingBody,
  PricingButton,
  PricingHeader,
  PricingHeaderBg,
  PricingItem,
  Princing,
} from 'src/lib/styled/PrincingCard';
import { BigText } from 'src/lib/styled/Typograph';
import ellipseImg from 'src/public/images/ellipseBg3.png';

const PrincingCard = (props: Props.PricingCard) => {
  const { cardData } = props;
  const { title, price, list, color } = cardData;

  const PricingItems = useMemo(() => {
    return list?.map(item => (
      <PricingItem key={item}>
        <IoCheckmark size={22} />
        <p>{item}</p>
      </PricingItem>
    ));
  }, [list.length]);

  return (
    <Princing className={color}>
      <PricingHeaderBg>
        <PricingHeader src={ellipseImg.src}>
          <h6>{title}</h6>
          <BigText size={9}>{price}</BigText>
          <span>PER MONTH</span>
        </PricingHeader>
      </PricingHeaderBg>
      <PricingBody>
        {PricingItems}
        <Link href="/app/payment">
          <PricingButton>Chose</PricingButton>
        </Link>
      </PricingBody>
    </Princing>
  );
};

export default PrincingCard;
