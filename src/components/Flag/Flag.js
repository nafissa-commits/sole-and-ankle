import React from 'react';
import styled from 'styled-components/macro';

import {COLORS as $COLORS, COLORS, WEIGHTS} from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';
import {variantType} from "../../utils/variantType";

const Flag = ({
  variant
}) => {

  const flag = (variant) => {
    if(variant === variantType.ON_SALE) {
      return (<FlagWrapper>Sale</FlagWrapper>);
    } else if(variant === variantType.NEW_RELEASE) {
      return (<FlagWrapper>Just Released!</FlagWrapper>);
    } else {
      return null;
    }
  }
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  return flag(variant);

};

const FlagWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  width: fit-content;
  padding: 7px 9px 9px 11px;
  border-radius: 2px;
`;

export default Flag;
