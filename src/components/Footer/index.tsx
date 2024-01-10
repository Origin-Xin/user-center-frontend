import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Origin Design';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <><GithubOutlined /> Origin GitHub</>,
          href: 'https://github.com/Origin-Xin',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
