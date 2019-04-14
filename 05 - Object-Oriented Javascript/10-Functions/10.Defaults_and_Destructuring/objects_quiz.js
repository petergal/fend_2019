function houseDescriptor({
  houseColor = 'green',
  shutterColors = ['red']
} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

console.log(
houseDescriptor({houseColor:'red', shutterColors:['white','gray','pink']})
);

console.log(
houseDescriptor({houseColor:'red'})
);

console.log(
houseDescriptor()
);

console.log(
houseDescriptor({shutterColors:['orange','blue']})
);

console.log(
houseDescriptor({})
);
