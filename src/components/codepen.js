import React from 'react';
import PropTypes from 'prop-types';

export const Codepen = ({
  name,
  user = 'winkerVSbecks',
  id,
  height = 400,
  themeId = '29126',
  bgColor = '#fff',
  color = '#000',
  author = null,
  showAttr = false,
  ...props
}) => (
  <div style={{ backgroundColor: bgColor }} {...props}>
    <iframe
      height={height}
      scrolling="no"
      title={name}
      src={`//codepen.io/${user}/embed/${id}/?height=${height}&theme-id=${themeId}&default-tab=result&embed-version=2`}
      frameBorder="no"
      allowtransparency="true"
      allowFullScreen="true"
      style={{
        display: 'block',
        width: '100%',
        border: 'none',
        backgroundColor: bgColor,
      }}
    >
      See the Pen
      <a href={`http://codepen.io/${user}/pen/${id}`}>{name}</a>
      by <a href={`http://codepen.io/${user}`}>@{user}</a>
      on <a href="http://codepen.io">CodePen</a>.
    </iframe>
    {showAttr && (
      <p style={{ color }} className="f5">
        <a style={{ color }} href={`http://codepen.io/${user}/pen/${id}`}>
          {name}
        </a>{' '}
        by{' '}
        {author || (
          <a style={{ color }} href={`http://codepen.io/${user}`}>
            @{user}
          </a>
        )}
      </p>
    )}
  </div>
);

Codepen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  bgColor: PropTypes.string,
  themeId: PropTypes.string,
  color: PropTypes.string,
  author: PropTypes.any,
};
