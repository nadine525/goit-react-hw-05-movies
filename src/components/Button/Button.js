import { BsArrowLeft } from 'react-icons/bs';
import { iconSize } from 'components/constans/iconSize';
import { Division, StyledLink } from './Button.styled';

const GoBackButton = ({ backLinkHref }) => {
  return (
    <Division>
      <StyledLink to={backLinkHref}>
        <BsArrowLeft size={iconSize.md} />
        Go back
      </StyledLink>
    </Division>
  );
};

export default GoBackButton;
