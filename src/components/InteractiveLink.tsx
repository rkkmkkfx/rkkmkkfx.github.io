import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';

type InteractiveLinkProps = {
  children: React.ReactNode;
  style?: CSS.Properties;
} & ({ href: string; to?: never } | { href?: never; to: string });

const InteractiveLink: React.VFC<InteractiveLinkProps> = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const as = props.href ? 'a' : Link;
  return <Interactive as={as} {...props} />;
};

export default InteractiveLink;
