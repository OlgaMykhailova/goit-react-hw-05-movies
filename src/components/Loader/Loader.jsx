import PropagateLoader from 'react-spinners/PropagateLoader';

import { PropTypes } from 'prop-types';

import {LoaderContainerStyle} from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainerStyle>
      <PropagateLoader color="orangered"/>
    </LoaderContainerStyle>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
 };