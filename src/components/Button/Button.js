import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';
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

GoBackButton.propTypes = {
  backLinkHref: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
  }).isRequired,
};
