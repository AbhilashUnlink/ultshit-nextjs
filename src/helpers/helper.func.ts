const phoneNumber = 8580738436;
export const whatsApp = (text: string) => {
  window.open(`https://wa.me/+91${phoneNumber}?text=${text}`);
};

export const callMe = () => {
  window.open(`tel:${phoneNumber}`);
};
