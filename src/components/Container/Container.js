import PropTypes from 'prop-types';

import styles from './Container.module.css';

function Container({ title, children }) {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
}

Container.defaultProps = {
  title: ' ',
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Container;
