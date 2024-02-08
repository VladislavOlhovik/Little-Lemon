import * as SC from './footer.styled';

const socialMediaList = [
  {
    title: 'Instagram',
    link: 'instagram.com',
  },
  {
    title: 'Facebook',
    link: 'facebook.com',
  },
  {
    title: 'TikTok',
    link: 'tiktok.com',
  },
];
const contacts = [
  {
    title: 'Chicago IL, ZIP Code',
    link: 'https://www.google.com/maps',
  },
  {
    title: '+10001112233',
    link: 'tel:+10001112233',
  },
  {
    title: 'littlelemon@gmail.com',
    link: 'mailto:littlelemon@gmail.com',
  },
];

export const Footer = () => {
  return (
    <SC.FooterContainer>
      <SC.FooterImg src='footer-lemon.webp' alt='Yellow Lemon' />
      <SC.FooterNavLinks />
      <address style={{ fontStyle: 'normal' }}>
        <SC.ContactInfo>
          <h3>Contacts</h3>
          <ul>
            {contacts.map(({ title, link }) => {
              return (
                <li key={link}>
                  <a target='blank' href={link}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </SC.ContactInfo>
      </address>
      <SC.ContactInfo>
        <h3>Social media</h3>
        <ul>
          {socialMediaList.map(({ title, link }) => {
            return (
              <li key={link}>
                <a target='blank' href={link}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </SC.ContactInfo>
    </SC.FooterContainer>
  );
};
