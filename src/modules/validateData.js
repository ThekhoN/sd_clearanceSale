export const isISObject = (obj) => {
  return obj && obj !== 'null' && obj !== 'undefined';
};

export const isLegitPogIdItem = item => {
  if (isISObject(item.commonMinProductDetailsDTO) && isISObject(item.commonMinProductDetailsDTO.priceInfo)) {
    return true;
  } else {
    return false;
  }
};

export const isLegitVendorDTOItem = item => {
  if (isLegitPogIdItem(item) && isISObject(item.commonMinProductDetailsDTO.vendorDTO)) {
    return true;
  } else {
    return false;
  }
};
