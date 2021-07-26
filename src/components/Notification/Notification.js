import PropTypes from 'prop-types';

import styles from './Notification.module.css';

function Notification({ message }) {
  return (
    <>
      <p className={styles.title}>{message}</p>
    </>
  );
}

Notification.defaultProps = {
  message: ' ',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
